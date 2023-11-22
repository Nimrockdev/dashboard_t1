import { DashboardLayout } from "../layout/DashboardLayout";
import { ConfigWidget } from "../../widgets/configWidget/configWidget";

export const DashboardConfigPage = () => {
  return (
    <DashboardLayout>
      <ConfigWidget />
    </DashboardLayout>
  );
};
