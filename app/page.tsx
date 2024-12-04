/* eslint-disable react/no-children-prop */
import Authlayout from "./(auth)/layout";
import SignIn from "./(auth)/sign-in/page";

export default function Home() {
  return (
    <Authlayout children={<SignIn/>}/>
  );
}
