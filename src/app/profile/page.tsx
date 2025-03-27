import Card from "@/components/creative_image/card";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Card
        title="Forest Mountain"
        description="a snowy mountain peak in a cold area not far from altantic"
        subtitle="snowy mountain"
        image="/images/mountain.jpg"
      />
    </div>
  );
};

export default page;
