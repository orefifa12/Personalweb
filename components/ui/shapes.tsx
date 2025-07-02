import type React from "react"

interface ShapeProps {
  className?: string
}

export const CircleShape: React.FC<ShapeProps> = ({ className }) => <div className={`rounded-full ${className}`}></div>

export const SquareShape: React.FC<ShapeProps> = ({ className }) => <div className={`rounded-xl ${className}`}></div>

export const TriangleShape: React.FC<ShapeProps> = ({ className }) => (
  <div
    className={`w-0 h-0 border-l-[50px] border-l-transparent border-b-[100px] border-b-current border-r-[50px] border-r-transparent ${className}`}
  ></div>
)
