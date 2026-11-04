import { Check } from "lucide-react";

/** Small looping scene per product. Purely decorative, driven by CSS. */
export default function ProductDemo({ name }) {
  const Demo = DEMOS[name];

  return (
    <div aria-hidden="true" className="relative z-10 w-full max-w-sm px-6">
      {Demo && <Demo />}
    </div>
  );
}

function FlowNode({ children, emphasized }) {
  return (
    <span
      className={`relative z-10 rounded-lg border px-3 py-2 text-xs font-medium ${
        emphasized
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-secondary"
      }`}
    >
      {children}
    </span>
  );
}

function AuthixDemo() {
  return (
    <div className="relative flex items-center justify-between">
      <span className="absolute inset-x-8 top-1/2 h-0.5 -translate-y-1/2 overflow-hidden bg-border">
        <span className="nx-travel block h-full w-1/4 rounded-full bg-primary" />
      </span>
      <FlowNode>Your app</FlowNode>
      <FlowNode emphasized>Authix</FlowNode>
      <FlowNode>User data</FlowNode>
    </div>
  );
}

function UiDemo() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border bg-background p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-secondary">Notifications</span>
        <span className="nx-toggle-track flex h-5 w-9 items-center rounded-full p-0.5">
          <span className="nx-toggle-knob h-4 w-4 rounded-full bg-white shadow" />
        </span>
      </div>
      <span className="h-8 rounded-md border border-border bg-card" />
      <span className="flex h-8 items-center justify-center rounded-md bg-primary text-xs font-semibold text-primary-foreground">
        Save changes
      </span>
    </div>
  );
}

function NotlixDemo() {
  const tasks = ["Plan the week", "Save the receipt", "Renew the domain"];

  return (
    <ul className="flex flex-col gap-2.5 rounded-xl border border-border bg-background p-4 shadow-lg">
      {tasks.map((task, index) => {
        const style = { animationDelay: `${index * 1.1}s` };

        return (
          <li key={task} className="flex items-center gap-2.5">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-border">
              <span
                style={style}
                className="nx-task-tick flex h-full w-full items-center justify-center rounded-md bg-primary text-primary-foreground"
              >
                <Check size={12} />
              </span>
            </span>
            <span className="relative text-xs font-medium text-secondary">
              {task}
              <span
                style={style}
                className="nx-task-strike absolute inset-x-0 top-1/2 h-px bg-secondary"
              />
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function ToolsDemo() {
  return (
    <div className="relative h-32 rounded-xl border border-border bg-background font-mono text-[11px] leading-5 shadow-lg">
      <span className="absolute right-3 top-2 font-sans text-[10px] font-semibold text-primary">
        Format
      </span>
      <pre className="nx-swap-before absolute inset-0 overflow-hidden whitespace-pre-wrap break-all p-4 pt-7 text-muted-foreground">
        {'{"name":"Neuctra","type":"tools","fast":true}'}
      </pre>
      <pre className="nx-swap-after absolute inset-0 overflow-hidden p-4 pt-3 text-secondary">
        {'{\n  "name": "Neuctra",\n  "type": "tools",\n  "fast": true\n}'}
      </pre>
    </div>
  );
}

const DEMOS = {
  "Neuctra Authix": AuthixDemo,
  "Neuctra UI": UiDemo,
  "Neuctra Notlix": NotlixDemo,
  "Neuctra Tools": ToolsDemo,
};
