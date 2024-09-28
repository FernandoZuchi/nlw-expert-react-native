import type { ReactNode } from "react";
import { TouchableOpacity, Text, type TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  children: ReactNode
}

type ButtonTextProps = {
  children: ReactNode
}

type ButtonIconProps = {
  children: ReactNode
}


function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
     className="h-12 bg-lime-400 rounded-md items-center justify-center flex-row"
     {...rest}
     activeOpacity={0.7}
    >
      {children}
    </TouchableOpacity>
  )
}

function ButtonText({ children }: ButtonTextProps) {
  return (
    <Text className="text-black text-base mx-2 font-heading">
      {children}
    </Text>
  )
}

function ButtonIcon({ children }: ButtonIconProps) {
  return children;
}

Button.Text = ButtonText;
Button.Icon = ButtonIcon;

export { Button };