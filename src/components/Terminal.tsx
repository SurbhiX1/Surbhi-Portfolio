import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2, Maximize2, Minimize2 } from 'lucide-react';
import { TERMINAL_COMMANDS } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: string;
  isError?: boolean;
}

export const Terminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'whoami',
      output: 'Computer Science and Engineering Student\nLovely Professional University • Class of 2029\nFocus: Software Development + AI/ML',
    },
    {
      command: 'education',
      output: 'Bachelor of Technology — Computer Science and Engineering\nLovely Professional University • Current CGPA: 9.49',
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>(['whoami', 'education']);
  const [isExpanded, setIsExpanded] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickCommands = ['help', 'skills', 'projects', 'education', 'achievements', 'contact', 'clear'];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    // Add to history list for up/down navigation
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let output = '';
    let isError = false;

    // Support commands like 'focus --list' or 'focus'
    if (trimmed === 'focus --list' || trimmed === 'focus') {
      output = `Software Development\nAI / ML\nProblem Solving\nWeb Technology & Database Systems`;
    } else if (TERMINAL_COMMANDS[trimmed]) {
      output = TERMINAL_COMMANDS[trimmed].output;
    } else {
      output = `zsh: command not found: "${trimmed}". Type "help" to see available commands.`;
      isError = true;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output, isError }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < commandHistory.length) {
          setHistoryIndex(nextIndex);
          setInputVal(commandHistory[nextIndex]);
        } else {
          setHistoryIndex(-1);
          setInputVal('');
        }
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      id="hero-developer-terminal"
      onClick={focusInput}
      className={`w-full transition-all duration-300 rounded-3xl border border-[#DED6C8] bg-[#FFFCF5] shadow-lg flex flex-col font-mono text-xs sm:text-sm overflow-hidden group ${
        isExpanded ? 'h-[460px]' : 'h-[360px] sm:h-[390px]'
      }`}
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#F1EBDD] border-b border-[#DED6C8] select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D97768] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E5B55A] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#7CA87E] inline-block" />
          </div>
          <div className="flex items-center gap-1.5 ml-2 text-[#6F6A60] text-xs">
            <TerminalIcon className="w-3.5 h-3.5 text-[#B08D3C]" />
            <span className="text-[#1C1B18] font-bold">surbhi@portfolio</span>
            <span className="text-[#6F6A60]">: ~</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="terminal-clear-btn"
            onClick={(e) => {
              e.stopPropagation();
              setHistory([]);
            }}
            title="Clear output"
            aria-label="Clear terminal"
            className="text-[#6F6A60] hover:text-[#1C1B18] p-1 rounded-md hover:bg-[#DED6C8] transition-colors cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
          <button
            id="terminal-expand-btn"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            title={isExpanded ? 'Minimize terminal' : 'Expand terminal'}
            aria-label={isExpanded ? 'Minimize terminal' : 'Expand terminal'}
            className="text-[#6F6A60] hover:text-[#1C1B18] p-1 rounded-md hover:bg-[#DED6C8] transition-colors cursor-pointer"
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-3 font-mono leading-relaxed bg-[#FFFCF5]">
        {/* Welcome Message */}
        <div className="text-[#6F6A60] text-xs pb-1 border-b border-[#DED6C8]">
          <span className="text-[#8C6D23] font-bold">Interactive Shell v1.0</span> • Type{' '}
          <span className="text-[#1C1B18] bg-[#F1EBDD] px-1.5 py-0.5 rounded text-[11px] border border-[#DED6C8]">help</span> or click command
          tags below.
        </div>

        {/* History stream */}
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-[#1C1B18]">
              <span className="text-[#8C6D23] font-bold">surbhi@portfolio</span>
              <span className="text-[#6F6A60]">~ $</span>
              <span className="text-[#1C1B18] font-bold">{item.command}</span>
            </div>
            <div
              className={`whitespace-pre-wrap pl-3 text-xs leading-relaxed font-sans ${
                item.isError ? 'text-[#9C3826]' : 'text-[#1C1B18]/85'
              }`}
            >
              {item.output}
            </div>
          </div>
        ))}

        {/* Active Prompt Input */}
        <div className="flex items-center gap-2 text-[#1C1B18] pt-1">
          <span className="text-[#8C6D23] font-bold shrink-0">surbhi@portfolio</span>
          <span className="text-[#6F6A60] shrink-0">~ $</span>
          <input
            ref={inputRef}
            id="terminal-active-input"
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Terminal command prompt input"
            placeholder="type command..."
            className="flex-1 bg-transparent text-[#1C1B18] placeholder:text-[#6F6A60]/50 outline-none border-none p-0 text-xs sm:text-sm font-mono caret-[#B08D3C]"
            autoComplete="off"
            spellCheck={false}
          />
          <button
            onClick={() => handleCommand(inputVal)}
            aria-label="Submit command"
            className="p-1 text-[#6F6A60] hover:text-[#8C6D23] rounded hover:bg-[#F1EBDD] cursor-pointer"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Quick Clickable Command Chips */}
      <div className="px-3 py-2 bg-[#F7F3EA] border-t border-[#DED6C8] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        <span className="text-[10px] text-[#6F6A60] font-sans uppercase shrink-0 mr-1 font-semibold">Quick:</span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            id={`terminal-quick-chip-${cmd}`}
            onClick={(e) => {
              e.stopPropagation();
              handleCommand(cmd);
            }}
            className="px-2.5 py-0.5 rounded-md bg-[#FFFCF5] hover:bg-[#B08D3C] text-[#1C1B18] hover:text-[#FFFCF5] border border-[#DED6C8] text-[11px] font-mono shrink-0 transition-colors shadow-xs cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};
