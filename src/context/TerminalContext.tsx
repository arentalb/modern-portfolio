import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router";

interface TerminalContextType {}

const terminalContext = createContext<TerminalContextType | undefined>(
  undefined,
);

function TerminalProvider({ children }: { children: ReactNode }) {
  const textareaRef: RefObject<HTMLTextAreaElement> = useRef(null);
  const navigate = useNavigate();
  const [state, setState] = useState(() => {
    let path = location.pathname;
    if (path === "/") {
      path = "";
    }
    const root = `arentalb:~${path}$`;
    return {
      root: root,
      command: {
        path: root,
        color: "white",
      },
    };
  });

  function writeCommand(value: string): void {
    const prefix = state.root;

    if (getLastLine().startsWith(prefix)) {
      setState((prevState) => {
        return {
          ...prevState,
          command: {
            ...prevState.command,
            path: value,
          },
        };
      });
    } else {
      console.log("Invalid command");
    }
  }

  function runCommand(): void {
    const lastLineCommand = getLastLine();
    const dollarIndex = lastLineCommand.indexOf("$");
    if (dollarIndex !== -1) {
      const textAfterDollar = lastLineCommand.substring(dollarIndex + 1).trim();
      processCommand(textAfterDollar);
    }
  }

  function processCommand(requestedCommand: string): void {
    const commandParts = requestedCommand.split(" ");

    switch (commandParts[0].trim()) {
      case "":
        terminalLog(`\n`);
        break;
      case "show":
        if (commandParts.length === 2) {
          if (commandParts[1] === "routes") {
            terminalLog(`\n/\narticle\ncertificates\n`);
          } else {
            terminalLog(`\nInvalid show command\n`);
          }
        } else {
          terminalLog(`\nInvalid show command\n`);
        }
        break;

      case "navigate":
        if (commandParts.length === 2) {
          if (
            commandParts[1] === "/" ||
            commandParts[1] === "article" ||
            commandParts[1] === "certificates"
          ) {
            navigate(commandParts[1]);
            terminalLog(`\n`);
          } else {
            terminalLog(`\nInvalid route\n`);
          }
        } else {
          terminalLog(`\nInvalid route command\n`);
        }

        break;
      case "open":
        if (commandParts.length === 2) {
          window.open(commandParts[1], "_blank");
          terminalLog(`\n`);
        } else {
          terminalLog(`\nInvalid open command \n`);
        }
        break;
      case "datetime":
        if (commandParts.length === 1) {
          terminalLog(`\n${new Date().toISOString()}\n`);
        } else {
          terminalLog(`\nInvalid datetime command \n`);
        }
        break;
      case "roll":
        if (commandParts.length === 2) {
          const numberOfDice = parseInt(commandParts[1]);
          if (!isNaN(numberOfDice) && numberOfDice > 0) {
            let numbers = "";
            for (let i = 0; i < numberOfDice; i++) {
              const randomNumber = Math.floor(Math.random() * 6) + 1;
              numbers = numbers + " " + randomNumber;
            }
            terminalLog(`\n${numbers}\n`);
          } else {
            terminalLog(`\nWrite valid number \n`);
          }
        } else {
          terminalLog(`\nInvalid roll command \n`);
        }

        break;
      case "flipcoin":
        if (commandParts.length === 1) {
          const chance = Math.random();
          if (chance <= 0.5) {
            terminalLog(`\nHeads \n`);
          } else {
            terminalLog(`\nTails \n`);
          }
        } else {
          terminalLog(`\nInvalid flipcoin command \n`);
        }

        break;
      case "help":
        terminalLog(
          `\nAvailable Commands:\n\nshow routes \t- Show available routes\nnavigate [route] \t- Navigate to a specific route\nopen [url] \t- Open a URL in a new tab\ndatetime \t- Display current date and time\nroll [number] \t- Roll a specified number of dice\nflipcoin \t- Flip a coin\nclear \t- Clear the terminal\n`,
        );

        break;
      case "clear":
        clearLog();
        break;
      // case "joke":
      //   break;
      default:
        terminalLog(`\ninvalid command\n`, "red");
    }
  }

  function clearLog() {
    setState((prevState) => {
      return {
        ...prevState,
        command: {
          ...prevState.command,
          path: prevState.root,
        },
      };
    });
  }

  function terminalLog(message: string, color: string = "white"): void {
    const commandHistory = `${state.command.path}${message}${state.root}`;

    setState((prevState) => {
      return {
        ...prevState,
        command: {
          ...prevState.command,
          path: commandHistory.trim(),
          color: color,
        },
      };
    });
  }

  function getLastLine() {
    if (textareaRef.current !== null) {
      const lines = textareaRef.current.value.split("\n");
      return lines[lines.length - 1];
    } else {
      return "";
    }
  }

  return (
    <terminalContext.Provider
      value={{
        state,
        writeCommand,
        runCommand,
        textareaRef,
      }}
    >
      {children}
    </terminalContext.Provider>
  );
}

function useTerminal() {
  const context = useContext(terminalContext);
  if (context === undefined)
    throw new Error("terminalContext is used outside of terminal-Provider ");
  //to avoid using teh context outside of where it should be used
  return context;
}

export { TerminalProvider, useTerminal };
