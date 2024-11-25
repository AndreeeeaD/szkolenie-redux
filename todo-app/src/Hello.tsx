import { Message } from './Message'

type HelloProps = {
  message: string;
  hLevel: 'h1' | 'h2' | 'h3';
}

export const Hello = (props: HelloProps) => {
  
  return <Message />
}
