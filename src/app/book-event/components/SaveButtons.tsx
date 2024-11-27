import { Button, Container } from "@/components/common";
import React from "react";

const SaveButtons = () => {
  return (
    <Container className="flex justify-end lg:py-14 pt-0 pb-10">
      <div className="flex items-center gap-5">
        <Button className="lg:!px-[70px]">Reset</Button>
        <Button className="lg:!px-[70px]" variant="outline">
          Save
        </Button>
      </div>
    </Container>
  );
};

export default SaveButtons;
