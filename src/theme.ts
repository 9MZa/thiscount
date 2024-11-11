import { Button, createTheme, Input, InputWrapper, Tabs, TextInput } from "@mantine/core";

export const theme = createTheme({
  headings: {
    fontFamily: "Noto Sans Thai, sans-serif",
  },
  components: {
    Button: Button.extend({
      styles: {
        root: {
          fontFamily: "Noto Sans Thai, sans-serif",
        },
      },
    }),
    Input: Input.extend({
      styles: {
        input: {
          fontFamily: "Noto Sans Thai, sans-serif",
        }
      }
    }),
    InputWrapper: Input.Wrapper.extend({
      styles: {
        label: {
          fontFamily: "Noto Sans Thai, sans-serif",
        },
        description: {
          fontFamily: "Noto Sans Thai, sans-serif",
        }
      },
    }),
    Tabs: Tabs.extend({
      styles: {
        tab: {
          fontFamily: "Noto Sans Thai, sans-serif",
          fontSize: "var(--mantine-font-size-lg)",
          fontWeight: "400",
        },
        panel: {
          marginTop: "var(--mantine-spacing-md)",
        },
      },
    }),
    TextInput: TextInput.extend({
      styles: {
        label: {
          fontFamily: "Noto Sans Thai, sans-serif",
        },
        description: {
          fontFamily: "Noto Sans Thai, sans-serif",
        },
        input: {
          fontFamily: "Noto Sans Thai, sans-serif",
        },
      },
    }),
  },
});
