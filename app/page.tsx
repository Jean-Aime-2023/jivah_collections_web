/* eslint-disable react/no-children-prop */
import Authlayout from "./(auth)/layout";
import SignUp from "./(auth)/sign-up/page";

export default function Home() {
  return (
    <Authlayout children={<SignUp/>}/>
  );
}
