import spinner from "../Assets/spinner.svg";

function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img
        src={spinner}
        alt="Loading..."
        className="text-center mx-auto"
        width={80}
      />
    </div>
  );
}

export default Spinner;
