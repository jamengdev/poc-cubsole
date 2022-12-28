import { Box, Button, HStack } from "@chakra-ui/react";
import Image from "next/image";
import plusIcon from "../assets/images/plus.png";
import plusBlackIcon from "../assets/images/plus_black.png";
import plusBrandIcon from "../assets/images/plus_brand.png";
import PlusSvg from "../assets/images/plus.svg";
import Plus from "../components/Icons/Plus";

export default function Buttons() {
  return (
    <Box p={2}>
      <StandardButtons />
      <StandardButtonsWithIcon />
      <StandardButtonWithLongText />
      <MidEmphasisButton />
      <LowEmphasisButton />
    </Box>
  );
}

const StandardButtons = () => {
  return (
    <Box pb={2}>
      <HStack spacing={2}>
        <Button size="lg">Large</Button>
        <Button>Medium</Button>
        <Button size="sm">Small</Button>
        <Button size="sm" disabled={true}>
          Small
        </Button>
      </HStack>
    </Box>
  );
};

const StandardButtonsWithIcon = () => {
  return (
    <Box pb={2}>
      <HStack spacing={2}>
        <Button
          leftIcon={<Plus color="#FFF" width={24} height={24} />}
          size="lg"
        >
          Large
        </Button>
        <Button leftIcon={<Plus color="#FFF" width={20} height={20} />}>
          Medium
        </Button>
        <Button
          leftIcon={<Plus color="#FFF" width={16} height={16} />}
          size="sm"
        >
          Small
        </Button>
        <Button
          leftIcon={<Plus color="#FFF" width={16} height={16} />}
          size="sm"
          disabled={true}
        >
          Small
        </Button>
      </HStack>
    </Box>
  );
};

const StandardButtonWithLongText = () => {
  return (
    <Box pb={2}>
      <HStack spacing={2}>
        <Button
          leftIcon={<Plus color="#FFF" width={24} height={24} />}
          size="lg"
        >
          Long text here
        </Button>
        <Button leftIcon={<Plus color="#FFF" width={20} height={20} />}>
          Long text here
        </Button>
        <Button
          leftIcon={<Plus color="#FFF" width={16} height={16} />}
          size="sm"
        >
          Long text here
        </Button>
        <Button
          leftIcon={<Plus color="#FFF" width={16} height={16} />}
          size="sm"
          disabled={true}
        >
          Long text here
        </Button>
      </HStack>
    </Box>
  );
};

const MidEmphasisButton = () => {
  return (
    <Box pb={2}>
      <HStack spacing={2}>
        <Button
          leftIcon={<Plus color="#1C96A3" width={24} height={24} />}
          variant="ghost"
          size="lg"
        >
          Long text here
        </Button>
        <Button
          leftIcon={<Plus color="#1C96A3" width={20} height={20} />}
          variant="ghost"
        >
          Long text here
        </Button>
        <Button
          leftIcon={<Plus color="#1C96A3" width={16} height={16} />}
          variant="ghost"
          size="sm"
        >
          Long text here
        </Button>
        <Button
          leftIcon={<Plus color="#1C96A3" width={16} height={16} />}
          variant="ghost"
          size="sm"
          disabled={true}
        >
          Long text here
        </Button>
      </HStack>
    </Box>
  );
};

const LowEmphasisButton = () => {
  return (
    <Box pb={2}>
      <HStack spacing={2}>
        <Button
          leftIcon={<Plus color="#1C96A3" width={24} height={24} />}
          variant="outline"
          size="lg"
        >
          Long text here
        </Button>
        <Button
          leftIcon={<Plus color="#1C96A3" width={20} height={20} />}
          variant="outline"
          size="md"
        >
          Long text here
        </Button>
        <Button
          leftIcon={<Plus color="#1C96A3" width={16} height={16} />}
          variant="outline"
          size="sm"
        >
          Long text here
        </Button>
        <Button
          leftIcon={<Plus color="#1C96A3" width={16} height={16} />}
          variant="outline"
          size="sm"
          disabled={true}
        >
          Long text here
        </Button>
      </HStack>
    </Box>
  );
};
