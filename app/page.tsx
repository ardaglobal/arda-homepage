import HomePageCarousel from "@/components/home-page-carousel";
import Icons from "@/components/icons";
// import { SubscribeForm } from "@/components/subscribeForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomePageCarousel />
      <div className="absolute bg-transparent top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center">
          <Image
            src="/arda-logo-2.svg"
            alt="Arda Logo"
            width={409}
            height={120}
            priority
          />
          <h3 className="text-white mt-2 text-center md:text-2xl text-lg font-semibold leading-8">
            Private Markets Reprogrammed
          </h3>
          {/* <h4 className="mt-10 mb-4 text-white text-base leading-6 font-semibold text-center">
            Join the waitlist for early access
          </h4>
          <SubscribeForm /> */}
          <div className="mt-10 flex items-center gap-6 py-3 px-4 rounded-xl bg-white/20 backdrop-blur-lg">
            <button>
              <a href="https://x.com/arda_global" target="_blank">
                <Icons.Twitter className="!w-full !h-full" />
              </a>
            </button>
            {/*             <Button
              disabled
              className="w-6 h-6 p-0 bg-transparent hover:bg-transparent"
            >
              <Icons.Facebook className="!w-full !h-full" />
            </Button> */}
            {/*              <Button
               disabled
              className="w-6 h-6 p-0 bg-transparent hover:bg-transparent"
            >
              <a href="https://www.instagram.com/arda_labs" target="_blank">
                 <Icons.Instagram className="!w-full !h-full" />
              </a>
             
            </Button> */}
            <Button className="w-6 h-6 p-0 bg-transparent hover:bg-transparent">
              <a
                href="https://www.linkedin.com/company/arda-realestates"
                target="_blank"
              >
                <Icons.Linkedin className="!w-full !h-full" />
              </a>
            </Button>
            {/*             <Button
              disabled
              className="w-6 h-6 p-0 bg-transparent hover:bg-transparent"
            >
              <Icons.Telegram className="!w-full !h-full" />
            </Button> */}
            <button>
              <a href="mailto:contact@arda.xyz">
                <Icons.Mail className="w-6 h-6" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
