import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, Trash2, Maximize2, Minimize2 } from 'lucide-react';
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
      command: 'status',
      output: 'Currently Learning • Building • Exploring\nTGPAs: Sem I (9.61) | Sem II (9.41)',
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>(['whoami', 'status']);
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
      className={`w-full transition-all duration-300 rounded-2xl border border-neutral-800 bg-neutral-950/90 shadow-2xl backdrop-blur-xl flex flex-col font-mono text-xs sm:text-sm overflow-hidden group ${
        isExpanded ? 'h-[460px]' : 'h-[360px] sm:h-[390px]'
      }`}
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900/90 border-b border-neutral-800 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-1.5 ml-2 text-neutral-400 text-xs">
            <TerminalIcon className="w-3.5 h-3.5 text-teal-400" />
            <span className="text-neutral-300 font-semibold">surbhi@portfolio</span>
            <span className="text-neutral-500">: ~</span>
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
            className="text-neutral-500 hover:text-neutral-300 p-1 rounded hover:bg-neutral-800 transition-colors"
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
            className="text-neutral-500 hover:text-neutral-300 p-1 rounded hover:bg-neutral-800 transition-colors"
          >
            {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-3 font-mono leading-relaxed">
        {/* Welcome Message */}
        <div className="text-neutral-400 text-xs pb-1 border-b border-neutral-900">
          <span className="text-teal-400 font-semibold">Interactive Shell v1.0</span> • Type{' '}
          <span className="text-neutral-200 bg-neutral-800 px-1 py-0.5 rounded text-[11px]">help</span> or click command
          tags below.
        </div>

        {/* History stream */}
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-neutral-300">
              <span className="text-teal-400 font-bold">surbhi@portfolio</span>
              <span className="text-neutral-500">~ $</span>
              <span className="text-neutral-100 font-semibold">{item.command}</span>
            </div>
            <div
              className={`whitespace-pre-wrap pl-3 text-xs sm:text-xs leading-relaxed ${
                item.isError ? 'text-rose-400' : 'text-neutral-300'
              }`}
            >
              {item.output}
            </div>
          </div>
        ))}

        {/* Active Prompt Input */}
        <div className="flex items-center gap-2 text-neutral-200 pt-1">
          <span className="text-teal-400 font-bold shrink-0">surbhi@portfolio</span>
          <span className="text-neutral-500 shrink-0">~ $</span>
          <input
            ref={inputRef}
            id="terminal-active-input"
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Terminal command prompt input"
            placeholder="type command..."
            className="flex-1 bg-transparent text-neutral-100 placeholder:text-neutral-700 outline-none border-none p-0 text-xs sm:text-sm font-mono caret-teal-400"
            autoComplete="off"
            spellCheck={false}
          />
          <button
            onClick={() => handleCommand(inputVal)}
            aria-label="Submit command"
            className="p-1 text-neutral-500 hover:text-teal-400 rounded hover:bg-neutral-900"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Quick Clickable Command Chips */}
      <div className="px-3 py-2 bg-neutral-900/60 border-t border-neutral-800/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
        <span className="text-[10px] text-neutral-500 font-sans uppercase shrink-0 mr-1">Quick:</span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            id={`terminal-quick-chip-${cmd}`}
            onClick={(e) => {
              e.stopPropagation();
              handleCommand(cmd);
            }}
            className="px-2 py-0.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-teal-300 border border-neutral-700/60 text-[11px] font-mono shrink-0 transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};
