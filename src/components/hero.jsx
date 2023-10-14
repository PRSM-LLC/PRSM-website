import React from "react";
import { Text, VStack, HStack, Button, chakra } from "@chakra-ui/react";

import Typewriter from "typewriter-effect";

const GradientShadowBtn = () => {
  return (
    <div className="group relative w-fit transition-transform duration-300 active:scale-95 mt-14">
      <button className="relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 duration-300 group-hover:scale-110">
        <span className="block rounded-md bg-slate-950 px-6 py-2 font-semibold text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80">
          Get Started
        </span>
      </button>
      <span className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-90 group-active:opacity-50" />
    </div>
  );
};

export default function Hero() {
  return (
    <VStack mb={"250px"} mt={"200px"}>
      <Text
        bgGradient="linear(to-l, #3d569e, #FF0380)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        align="center"
      >
        <chakra.span color="#000000">Our </chakra.span>
        <chakra.span color="#B165FE">Mission. </chakra.span>
        <chakra.span color="#000000">Your </chakra.span>
        <chakra.span color="#139BFD">Success. </chakra.span>
      </Text>

      <Text
        bgGradient="linear(to-l, #B165FE, #139BDF)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        <HStack>
          <chakra.span color="black">Let&apos;s get </chakra.span>
          <chakra.span> </chakra.span>
          <Typewriter
            options={{
              strings: ["Started.", "Now."],
              autoStart: true,
              loop: true,
            }}
          />
        </HStack>
      </Text>
      <GradientShadowBtn />
    </VStack>
  );
}
