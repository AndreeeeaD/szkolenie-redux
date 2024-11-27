import React, { PropsWithChildren } from 'react';

type UserNameProps = {
  name: string;
}

export const UserName = ({ name }: UserNameProps) => {
  return <div>{name}</div>
}

type UserNameBoxProps = {
  topContent?: React.ReactNode;
  bottonContent?: React.ReactNode;
}

export const UserNameBox = ({ children, topContent, bottonContent }: PropsWithChildren<UserNameBoxProps>) => (
  <div>
    {topContent && topContent}
    {children}
    {bottonContent && bottonContent}
  </div>
)
