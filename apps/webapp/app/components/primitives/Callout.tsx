import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  LightBulbIcon,
} from "@heroicons/react/20/solid";
import { cn } from "~/utils/cn";
import { Paragraph } from "./Paragraph";

const variantClasses = {
  info: {
    className: "border-blue-400/20 bg-blue-400/30",
    icon: <InformationCircleIcon className="h-5 w-5 shrink-0 text-blue-400" />,
    text: "text-blue-200",
  },
  warning: {
    className: "border-yellow-400/20 bg-yellow-400/30",
    icon: (
      <ExclamationCircleIcon className="h-5 w-5 shrink-0 text-yellow-400" />
    ),
    text: "text-yellow-200",
  },
  error: {
    className: "border-[hsl(347,77%,50%)]/30 bg-[hsl(347,77%,50%)]/20",
    icon: (
      <ExclamationTriangleIcon className="h-5 w-5 shrink-0 text-rose-400" />
    ),
    text: "text-rose-200",
  },
  idea: {
    className: "border-green-400/20 bg-green-400/30",
    icon: <LightBulbIcon className="h-5 w-5 shrink-0 text-green-400" />,
    text: "text-green-200",
  },
} as const;

export function Callout({
  children,
  className,
  icon,
  variant,
}: {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  variant: keyof typeof variantClasses;
}) {
  const variantDefinition = variantClasses[variant];

  return (
    <div
      className={cn(
        `flex w-full gap-4 rounded-md border py-3 pl-3 pr-4 shadow-md backdrop-blur-sm`,
        variantDefinition.className,
        className
      )}
    >
      <div className="flex items-start justify-start gap-2.5">
        {icon ? icon : variantDefinition.icon}

        {typeof children === "string" ? (
          <Paragraph variant={"small"} className={variantDefinition.text}>
            {children}
          </Paragraph>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
