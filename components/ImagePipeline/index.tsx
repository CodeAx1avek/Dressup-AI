import React, { useEffect, useRef, useState } from "react";
import ImageUploader from "./ImageUploader";
import { client } from "@gradio/client";
import { GrNext } from "react-icons/gr";
import * as ga from "@/libs/ga";

const apiUrls = ["/load_example", "/load_example_1", "/load_example_2"];

const top_garment = [
  {
    id: 0,
    url: "https://humanaigc-outfitanyone.hf.space/--replicas/ppht9/file=/tmp/gradio/f3ba321017355c5a0c8051d3f438e881cc87b945/top222.JPG",
  },
  {
    id: 1,
    url: "https://humanaigc-outfitanyone.hf.space/--replicas/ppht9/file=/tmp/gradio/65ff53dc99803d44d4e07facd195cda873856968/top5.png",
  },
  {
    id: 2,
    url: "https://humanaigc-outfitanyone.hf.space/--replicas/ppht9/file=/tmp/gradio/79df244bb1e3a712b3612fdd0bebf93ff40a88a8/top333.png",
  },
  {
    id: 3,
    url: "https://humanaigc-outfitanyone.hf.space/--replicas/ppht9/file=/tmp/gradio/3b0d73532b2296848b39c332c018211fb1d8f8c6/dress1.png",
  },
  {
    id: 4,
    url: "https://humanaigc-outfitanyone.hf.space/--replicas/ppht9/file=/tmp/gradio/30275a32330224953f3bd08c3e536fd451706bab/dress2.png",
  },
];

const lower_garment = [
  {
    id: 0,
    url: "https://humanaigc-outfitanyone.hf.space/--replicas/ppht9/file=/tmp/gradio/b231ba8252f242cb5734a28f45b669d4c4bfd965/bottom1.png",
  },
  {
    id: 1,
    url: "https://humanaigc-outfitanyone.hf.space/--replicas/ppht9/file=/tmp/gradio/17850932298f412c6d307504e6694510c3983592/bottom2.PNG",
  },
  {
    id: 2,
    url: "https://humanaigc-outfitanyone.hf.space/--replicas/ppht9/file=/tmp/gradio/166442933d4f5841ac2a19568ac6b1fdfd495e35/bottom3.JPG",
  },
  {
    id: 3,
    url: "https://humanaigc-outfitanyone.hf.space/--replicas/ppht9/file=/tmp/gradio/27316c1d97f31a0eeef64d42202e1beadb08483a/bottom4.PNG",
  },
  {
    id: 4,
    url: "https://humanaigc-outfitanyone.hf.space/--replicas/ppht9/file=/tmp/gradio/94c62681b3f3086ea00a63df9a9ceb85fe7b04e8/bottom5.png",
  },
];

const models = [
  {
    id: 1,
    url: "https://humanaigc-outfitanyone.hf.space/--replicas/ppht9/file=/tmp/gradio/f7dce00cee84dadceb24526d4ce5cc5999855c9d/Rouyan_2.png",
  },
  {
    id: 2,
    url: "https://humanaigc-outfitanyone.hf.space/--replicas/ppht9/file=/tmp/gradio/28dbd2deba1e160bfadffbc3675ba4dcac20ca58/Eva_0.png",
  },
  {
    id: 3,
    url: "https://humanaigc-outfitanyone.hf.space/--replicas/ppht9/file=/tmp/gradio/2f060521cb67195666c59ccd0e47ecc2587a4100/Simon_1.png",
  },
  {
    id: 6,
    url: "https://humanaigc-outfitanyone.hf.space/--replicas/ppht9/file=/tmp/gradio/ef12488138e32ba30930bd342a53fbc409ad00a9/Xuanxuan_0.png",
  },
  {
    id: 13,
    url: "https://humanaigc-outfitanyone.hf.space/--replicas/ppht9/file=/tmp/gradio/53974d6ff65483b035a8437be33a9b2c4764b021/Yaqi_0.png",
  },
];

export default function ImagePipeline() {
  const [app, setApp] = useState();
  const [imageData, setImageData] = useState([]);
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    (async () => {
      const a = await client(
        "https://humanaigc-outfitanyone.hf.space/--replicas/ppht9/",
        {}
      );
      setApp(a);
    })();

    const isDesktop = window.innerWidth > 1024;
    if (wrapperRef.current && isDesktop) {
      const height = wrapperRef.current.offsetHeight;
      wrapperRef.current.style.height = `${height}px`;
    }
  }, []);

  const handleGenerate = async () => {
    if (!app) return;
    // console.log("imageData:", imageData);
    if (imageData.length < 2) {
      console.error("Missing imageData");
      return;
    } else if (imageData.length === 2) {
      imageData[2] = null;
    }
    for (let i = 0; i < imageData.length; i++) {
      if (!imageData[i]?.orig_name || !imageData[i]?.path) {
        if (i === 2) {
          imageData[2] = null;
        } else {
          console.error("Missing orig_name or path in imageData at index", i);
          return;
        }
      }
    }
    try {
      setIsLoading(true);
      const result = await app.predict("/get_tryon_result", imageData);
      setOutput(result.data[0].url);
      // console.log("result", result);
      setIsLoading(false);
      ga.event({
        action: "click",
        params: {
          category: "generate",
          label: "generate",
          error: false,
        },
      });
    } catch (e) {
      console.log(e);
      ga.event({
        action: "click",
        params: {
          category: "generate",
          label: "generate",
          error: true,
        },
      });
    }
  };
  const handlePick = async (id, type) => {
    try {
      const result = await app.predict(apiUrls[type], [id]);
      setImageData((prev) => {
        const temp = [...prev];
        temp[type] = { ...result.data[0].value };
        return temp;
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="lg:flex self-stretch h-full flex-col pb-8">
      <h2 className="text-3xl font-bold text-center py-5">
        Put Clothes on Models. Try it yourself, choose a picture, press
        'Generate'
      </h2>
      <div className="lg:flex lg:gap-4 h-full pb-6 items-stretch">
        <div className="flex flex-col border-2 rounded-3xl border-base-300 p-4 flex-1">
          <h2 className="text-xl text-center pb-4">
            Select model (right now you can only choose one from the list)
          </h2>
          <ImageUploader
            imageList={models}
            onUpload={null}
            onPick={(id) => handlePick(id, 0)}
          />
        </div>
        <div className="flex items-center justify-center">
          <GrNext size={28} className="rotate-90 lg:rotate-0 text-base-300" />
        </div>

        <div className="flex flex-col self-stretch h-full  border-2 rounded-3xl border-base-300 p-4 flex-1">
          <h2 className="text-xl text-center pb-4">
            Select top and bottom garment or upload your own
          </h2>
          <div className="h-1/2">
            <ImageUploader
              imageList={top_garment}
              onUpload={(image) =>
                setImageData((prev) => {
                  const temp = [...prev];
                  temp[1] = image;
                  return temp;
                })
              }
              onPick={(id) => handlePick(id, 1)}
            />
          </div>
          <div className="h-1/2">
            <ImageUploader
              imageList={lower_garment}
              onUpload={(image) =>
                setImageData((prev) => {
                  const temp = [...prev];
                  temp[2] = image;
                  return temp;
                })
              }
              onPick={(id) => handlePick(id, 2)}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <GrNext size={28} className="rotate-90 lg:rotate-0 text-base-300" />
        </div>
        <div className="flex flex-col self-stretch flex-1 border-2 rounded-3xl border-base-300 p-4">
          <h2 className="text-xl text-center pb-4">Result</h2>
          <div className="text-center py-4">
            {isLoading ? (
              <button className="btn  w-full">
                <span className="loading loading-spinner"></span>
                waiting...
              </button>
            ) : (
              <button
                className="btn btn-primary w-full"
                onClick={handleGenerate}
                disabled={!imageData[0]?.path || !imageData[1]?.path}
              >
                Generate
              </button>
            )}
          </div>
          <div
            className="w-auto h-full flex flex-col justify-center items-center"
            ref={wrapperRef}
          >
            {output && !isLoading && (
              <img
                src={output}
                alt="result"
                className="w-full h-full object-contain"
              />
            )}
            {isLoading && (
              <span className="loading loading-bars loading-lg"></span>
            )}

            {(!imageData[0]?.orig_name || !imageData[0]?.path) && (
              <p>No model</p>
            )}
            {(!imageData[1]?.orig_name || !imageData[1]?.path) && (
              <p>No top garment</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}