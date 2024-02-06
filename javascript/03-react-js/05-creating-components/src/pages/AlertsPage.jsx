import AlertDanger from "../components/Alerts/AlertDanger";
import AlertDark from "../components/Alerts/AlertDark";
import AlertInfo from "../components/Alerts/AlertInfo";
import AlertLight from "../components/Alerts/AlertLight";
import AlertPrimary from "../components/Alerts/AlertPrimary";
import AlertSecondary from "../components/Alerts/AlertSecondary";
import AlertSuccess from "../components/Alerts/AlertSuccess";
import AlertWarning from "../components/Alerts/AlertWarning";
import AlertWarningSvg from "../components/Alerts/AlertWarningSvg";
import AlertInfoSvg from "../components/Alerts/AlertInfoSvg";

const AlertsPage = () => {
  return (
    <section className="mx-28 my-10">
      <h1 className="text-3xl font-semibold">Alert Components</h1>
      <p className="text-lg mt-2 tracking-wide">
        Provide contextual feedback messages for typical user actions with the
        handful of available and flexible alert messages.
      </p>
      <div className="border px-10 py-8 rounded mt-5 space-y-5">
        <AlertPrimary text="A simple primary alert—check it out!" />
        <AlertSecondary text="A simple secondary alert—check it out!" />
        <AlertSuccess text="A simple success alert—check it out!" />
        <AlertDanger text="A simple danger alert—check it out!" />
        <AlertWarning text="A simple warning alert—check it out!" />
        <AlertInfo text="A simple info alert—check it out!" />
        <AlertLight text="A simple light alert—check it out!" />
        <AlertDark text="A simple dark alert—check it out!" />

        {/* With Svg */}
        <h1 className="text-3xl font-semibold !mt-10">Icons</h1>
        <AlertWarningSvg text="A simple warning alert—check it out!">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M2.725 21q-.275 0-.5-.137t-.35-.363q-.125-.225-.137-.488t.137-.512l9.25-16q.15-.25.388-.375T12 3q.25 0 .488.125t.387.375l9.25 16q.15.25.138.513t-.138.487q-.125.225-.35.363t-.5.137zM12 18q.425 0 .713-.288T13 17q0-.425-.288-.712T12 16q-.425 0-.712.288T11 17q0 .425.288.713T12 18m0-3q.425 0 .713-.288T13 14v-3q0-.425-.288-.712T12 10q-.425 0-.712.288T11 11v3q0 .425.288.713T12 15" />
            </svg>
          </div>
        </AlertWarningSvg>
        <AlertInfoSvg text="A simple info alert—check it out!">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11q-.425 0-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22" />
            </svg>
          </div>{" "}
        </AlertInfoSvg>
      </div>
    </section>
  );
};

export default AlertsPage;
