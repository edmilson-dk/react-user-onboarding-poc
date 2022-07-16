import Driver from "driver.js";
import "driver.js/dist/driver.min.css";

export function useOnboardingDriver() {
  const onboardingDriver = new Driver({
    closeBtnText: "Fechar",
    doneBtnText: "Pronto",
    nextBtnText: "Próximo",
    prevBtnText: "Anterior",
    animate: true,
    className: "onboarding-driver",
  });

  return {
    onboardingDriver,
  };
}
