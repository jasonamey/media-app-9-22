import React from 'react'
import styled from 'styled-components'

interface IInputFieldProps {
  value: string
  error: string
  type: string
  id?: string
  placeHolder: string
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function InputField({
  value,
  error,
  type,
  placeHolder,
  id,
  changeHandler,
}: IInputFieldProps) {
  return (
    <InputFieldWrapper>
      <label htmlFor={id}>{type}</label>
      <input
        type={type}
        id={id}
        placeholder={placeHolder}
        value={value}
        onChange={changeHandler}
      />
      <span className="error">{error}</span>
    </InputFieldWrapper>
  )
}

const InputFieldWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  label {
    position: absolute;
    left: -2000px;
  }
  input {
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.lightBlue};
    padding-bottom: 12px;
    padding-inline-start: 12px;
    font-size: 14px;
    margin-bottom: 22px;
    background-color: transparent;
    color: ${(props) => props.theme.white};
    font-weight: 200;
    outline: none;
  }
  .error {
    position: absolute;
    right: 0;
    top: 0;
    font-weight: 200;
    font-size: 14px;
    color: ${(props) => props.theme.red};
  }
`

export default InputField
