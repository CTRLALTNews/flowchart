import { ArcherContainer, ArcherElement } from "react-archer";
import { RelationType } from "react-archer/lib/types";
import { cn } from "./utils/cn";

export const lineStyle = {
  strokeColor: "#00000050",
  startMarker: false,
  endMarker: false,
};

const TextField = ({
  relations,
  id,
  text,
  className,
  showGlow,
}: {
  relations?: RelationType[];
  id: string;
  text: string;
  showGlow?: boolean;
  className?: string;
}) => {
  return (
    <ArcherElement id={id} relations={relations}>
      <div className="relative group">
        {showGlow && (
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-green-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 "></div>
        )}
        <p
          className={cn(
            `relative py-2 px-8 bg-popover rounded-md border bg-white`,
            className
          )}
        >
          {text}
        </p>
      </div>
    </ArcherElement>
  );
};

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <ArcherContainer className="h-full w-full">
        <div className="w-full h-full flex items-center px-12 py-16 sm:py-8 md:p-0">
          <div className="hidden md:flex w-full min-h-96 sm:min-h-96 sm:h-96 flex-col md:flex-row md:mr-16 gap-12 sm:gap-0">
            <div className="md:h-full md:w-1/3 h-1/3 w-full flex flex-col sm:flex-row md:flex-col justify-center items-center md:items-end gap-8">
              <TextField
                text="Input"
                id="input1"
                relations={[
                  {
                    targetId: "process",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: lineStyle,
                  },
                ]}
              />
              <TextField
                text="Input"
                id="input2"
                relations={[
                  {
                    targetId: "process",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: lineStyle,
                  },
                ]}
              />
              <TextField
                text="Input"
                id="Input 3"
                relations={[
                  {
                    targetId: "process",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: lineStyle,
                  },
                ]}
              />
            </div>
            <div className="md:h-full md:w-1/3 h-1/3 w-full flex items-center justify-center">
              <TextField
                text="Process"
                id="process"
                showGlow
                relations={[
                  {
                    targetId: "output1",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: { ...lineStyle },
                  },
                  {
                    targetId: "output2",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: { ...lineStyle },
                  },
                  {
                    targetId: "output3",
                    targetAnchor: "left",
                    sourceAnchor: "right",
                    style: { ...lineStyle },
                  },
                ]}
                className="font-bold  border-transparent"
              />
            </div>
            <div className="md:h-full md:w-1/3 h-1/3 w-full flex flex-col sm:flex-row md:flex-col  justify-center items-center md:items-start gap-8">
              <TextField text="Output" id="output1" />
              <TextField text="Output" id="output2" />
              <TextField text="Output" id="output3" />
            </div>
          </div>
        </div>
      </ArcherContainer>
    </div>
  );
}

export default App;
