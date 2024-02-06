import BtnDanger from "../components/Buttons/BtnDanger";
import BtnDark from "../components/Buttons/BtnDark";
import BtnInfo from "../components/Buttons/BtnInfo";
import BtnLight from "../components/Buttons/BtnLight";
import BtnPrimary from "../components/Buttons/BtnPrimary";
import BtnSecondary from "../components/Buttons/BtnSecondary";
import BtnSuccess from "../components/Buttons/BtnSuccess";
import BtnWarning from "../components/Buttons/BtnWarning";
import BtnSuccessSvg from "../components/Buttons/BtnSuccessSvg";
import BtnDangerSvg from "../components/Buttons/BtnDangerSvg";

const ButtonsPage = () => {
  return (
    <section className="mx-28 my-10">
      <h1 className="text-3xl font-semibold">Buttons</h1>
      <p className="text-lg mt-2 tracking-wide">
        Use custom button styles for actions in forms, dialogs, and more with
        support for multiple sizes, states, and more.
      </p>
      <div className="border px-10 py-8 rounded mt-5 ">
        <div className="flex items-center space-x-5">
          <BtnPrimary text="Primary" />
          <BtnSecondary text="Secondary" />
          <BtnSuccess text="Success" />
          <BtnDanger text="Danger" />
          <BtnWarning text="Warning" />
          <BtnInfo text="Info" />
          <BtnLight text="Light" />
          <BtnDark text="Dark" />
        </div>

        {/* With Svg */}
        <h1 className="text-3xl font-semibold !mt-10">Icons</h1>
        <div className="flex items-center space-x-5 mt-5">
          <BtnSuccessSvg text="Success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 1024 1024"
              className="fill-current"
            >
              <path d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z" />
            </svg>
          </BtnSuccessSvg>

          <BtnDangerSvg text="Danger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <g fill="none">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></circle>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M12 7v6"
                ></path>
                <circle cx="12" cy="16" r="1" fill="currentColor"></circle>
              </g>
            </svg>{" "}
          </BtnDangerSvg>
        </div>
      </div>
    </section>
  );
};

export default ButtonsPage;
