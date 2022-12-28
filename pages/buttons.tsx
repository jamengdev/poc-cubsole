import {
  Heading,
  Box,
  Button,
  HStack,
  Flex,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Image from "next/image";
import plusIcon from "../assets/images/plus.png";
import plusBlackIcon from "../assets/images/plus_black.png";
import plusBrandIcon from "../assets/images/plus_brand.png";
import PlusSvg from "../assets/images/plus.svg";
import Plus from "../components/Icons/Plus";

export default function Buttons() {
  return (
    <Box p={2}>
      <Heading as="h1" size="3xl" pb={4}>
        Podium Buttons x Chakra UI
      </Heading>
      <HighEmphasisButtons />
      <HighEmphasisButtonsWithIcon />
      <HighEmphasisButtonWithLongText />
      <MidEmphasisButton />
      <LowEmphasisButton />
    </Box>
  );
}

const HighEmphasisButtons = () => {
  return (
    <Box pb={4}>
      <Heading as="h2" size="md" noOfLines={1} mb={2}>
        High Emphasis
      </Heading>
      <Wrap spacing={2}>
        <WrapItem>
          <Button size="lg">Large</Button>
        </WrapItem>
        <WrapItem>
          <Button>Medium</Button>
        </WrapItem>
        <WrapItem>
          <Button size="sm">Small</Button>
        </WrapItem>
        <WrapItem>
          <Button size="sm" disabled={true}>
            Small
          </Button>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

const HighEmphasisButtonsWithIcon = () => {
  return (
    <Box pb={4}>
      <Heading as="h2" size="md" noOfLines={1} mb={2}>
        High Emphasis with Icon
      </Heading>
      <Wrap>
        <WrapItem>
          <Button
            leftIcon={<Plus color="#FFF" width={24} height={24} />}
            size="lg"
          >
            Large
          </Button>
        </WrapItem>
        <WrapItem>
          <Button leftIcon={<Plus color="#FFF" width={20} height={20} />}>
            Medium
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            leftIcon={<Plus color="#FFF" width={16} height={16} />}
            size="sm"
          >
            Small
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            leftIcon={<Plus color="#FFF" width={16} height={16} />}
            size="sm"
            disabled={true}
          >
            Small
          </Button>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

const HighEmphasisButtonWithLongText = () => {
  return (
    <Box pb={4}>
      <Heading as="h2" size="md" noOfLines={1} mb={2}>
        High Emphasis with long text
      </Heading>
      <Wrap>
        <WrapItem>
          <Button
            leftIcon={<Plus color="#FFF" width={24} height={24} />}
            size="lg"
          >
            Long text here
          </Button>
        </WrapItem>
        <WrapItem>
          <Button leftIcon={<Plus color="#FFF" width={20} height={20} />}>
            Long text here
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            leftIcon={<Plus color="#FFF" width={16} height={16} />}
            size="sm"
          >
            Long text here
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            leftIcon={<Plus color="#FFF" width={16} height={16} />}
            size="sm"
            disabled={true}
          >
            Long text here
          </Button>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

const MidEmphasisButton = () => {
  return (
    <Box pb={4}>
      <Heading as="h2" size="md" noOfLines={1} mb={2}>
        Mid Emphasis
      </Heading>
      <Wrap spacing={2}>
        <WrapItem>
          <Button
            leftIcon={<Plus color="#1C96A3" width={24} height={24} />}
            variant="ghost"
            size="lg"
          >
            Long text here
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            leftIcon={<Plus color="#1C96A3" width={20} height={20} />}
            variant="ghost"
          >
            Long text here
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            leftIcon={<Plus color="#1C96A3" width={16} height={16} />}
            variant="ghost"
            size="sm"
          >
            Long text here
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            leftIcon={<Plus color="#1C96A3" width={16} height={16} />}
            variant="ghost"
            size="sm"
            disabled={true}
          >
            Long text here
          </Button>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

const LowEmphasisButton = () => {
  return (
    <Box pb={4}>
      <Heading as="h2" size="md" noOfLines={1} mb={2}>
        Low Emphasis
      </Heading>
      <Wrap spacing={2}>
        <WrapItem>
          <Button
            leftIcon={<Plus color="#1C96A3" width={24} height={24} />}
            variant="outline"
            size="lg"
          >
            Long text here
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            leftIcon={<Plus color="#1C96A3" width={20} height={20} />}
            variant="outline"
            size="md"
          >
            Long text here
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            leftIcon={<Plus color="#1C96A3" width={16} height={16} />}
            variant="outline"
            size="sm"
          >
            Long text here
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            leftIcon={<Plus color="#1C96A3" width={16} height={16} />}
            variant="outline"
            size="sm"
            disabled={true}
          >
            Long text here
          </Button>
        </WrapItem>
      </Wrap>
    </Box>
  );
};
