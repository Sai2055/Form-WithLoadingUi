import { useState } from "react";

export default function FormSubmit() {
  const [isSubmit, setIsSubmit] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmit(true);
    try {
      await new Promise((reslove) => setTimeout(reslove, 2000));
    } finally {
      setIsSubmit(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form action="" className="flex flex-col gap-3" onClick={handleSubmit}>
        <div>
          <label htmlFor="">UserName : </label>
          <input type="text" className="border border-black" />
        </div>
        <div>
          <label htmlFor="">Password : </label>
          <input type="text" className="border border-black" />
        </div>
        <button type="submit" className="border border-black px-2 ">
          {isSubmit ? "Submiting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
