"use client";

import { useState } from "react";
import "react-accessible-accordion/dist/fancy-example.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { SeriesSeason } from "@/types/series";

export default function EpisodesContainer({
  seasons,
}: {
  seasons: SeriesSeason[];
}) {
  const [episodes, setEpisodes] = useState([]);
  return (
    <>
      <div className="my-5 w-[80%] mx-auto">
        <span className="text-white text-[28px] border-b-2 border-yellow-500">
          SEASONS
        </span>
      </div>
      <div className="w-[80%] mx-auto">
        <Accordion>
          {seasons?.map((item, index) => (
            <AccordionItem key={item.id}>
              <AccordionItemHeading>
                <AccordionItemButton className="bg-gray-600 p-5">
                  {`SEASON ${index + 1}`}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                  occaecat ut occaecat consequat est minim minim esse tempor
                  laborum consequat esse adipisicing eu reprehenderit enim.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}
