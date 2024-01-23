
import { Label, TextInput } from 'flowbite-react';

function Sigup() {
  return (
    <>
    <br />
    

    <div className="flex max-w-md flex-col gap-4 text-center ww">
      <div className='fd'>
        <div className="mb-2 block">
          <Label htmlFor="small" value="FirstName" />
        </div>
        <TextInput id="small" type="text" sizing="sm" />
      </div>
      <div className='fd'>
        <div className="mb-2 block">
          <Label htmlFor="base" value="SecondName" />
        </div>
        <TextInput id="base" type="text" sizing="md" />
      </div>
      <div className='fd'>
        <div className="mb-2 block">
          <Label htmlFor="large" value="Email" />
        </div>
        <TextInput id="large" type="text" sizing="lg" />
      </div>
      <p className='text-center'>Already a member? <button>Signin</button></p>
    <button className='text-center'>SignUp</button>
    </div>
    
    </>
  )
}

export default Sigup