"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

export default function HomePageCarousel() {
  return (
    <Carousel
      className="w-full bg-black"
      draggable={false}
      opts={{
        watchFocus: false,
        watchDrag: false,
        watchSlides: false,
        skipSnaps: false,
        duration: 250,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
        Fade(),
      ]}
    >
      <CarouselContent className="ml-0 h-screen">
        <CarouselItem className="h-full pl-0">
          <div className="h-full bg-[url(/dubai.jpg)] bg-cover bg-center" />
        </CarouselItem>
        <CarouselItem className="h-full pl-0">
          <div className="h-full bg-[url(/hongkong.jpg)] bg-cover bg-center" />
        </CarouselItem>
        <CarouselItem className="h-full pl-0">
          <div className="h-full bg-[url(/newyork.jpg)] bg-cover bg-center" />
        </CarouselItem>
        <CarouselItem className="h-full pl-0">
          <div className="h-full bg-[url(/london.jpg)] bg-cover bg-center" />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
