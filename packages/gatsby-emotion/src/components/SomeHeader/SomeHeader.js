import React from "react"
import { css } from "@emotion/react"

const color = "#000"

const SomeHeader = () => {
  return (
    <div
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        color: #fff;
        &:hover {
          color: ${color};
        }
      `}
    >
      Hover to change color.
    </div>
  )
}

export default SomeHeader
