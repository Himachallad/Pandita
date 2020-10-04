import * as React from "react";
import { DefaultButton, TextButton } from './common/Button';
import { OutlinedTextField } from './common/Input'
export interface HelloWorldProps {
  userName: string;
  lang: string;
}
export const App = (props: HelloWorldProps) => (
  <h1>
    Hi {props.userName} from React! Welcome to {props.lang}!
    <TextButton text="abc" />
    <DefaultButton text="abc" />
    <OutlinedTextField label="Search"/>
  </h1>
);