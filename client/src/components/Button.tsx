import { ReactNode } from "react"
import styled from "styled-components"

const SButton = styled.button``

type Props = {
  children: ReactNode
}

export default function Button({ children }: Props) {
  return <SButton>{children}</SButton>
}
