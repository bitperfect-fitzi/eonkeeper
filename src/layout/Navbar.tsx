import {Button, Stack} from "@mantine/core";
import {IconArrowRight} from "@tabler/icons-react";

export const Navbar = () => {
    return <Stack
        bg="var(--mantine-color-body)"
        align="stretch"
        justify="flex-start"
        gap="md"
    >
        <Button justify="flex-start" leftSection={<IconArrowRight size={14} />} variant="default">1</Button>
        <Button justify="flex-start" variant="default">2</Button>
        <Button justify="flex-start" variant="default">3</Button>
    </Stack>
}