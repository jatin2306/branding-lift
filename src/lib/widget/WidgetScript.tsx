import Script from "next/script";

export default function WidgetScript() {
  return (
    <Script
      src={process.env.NEXT_PUBLIC_WIDGET_SCRIPT_URL}
      data-employee-token={process.env.NEXT_PUBLIC_WIDGET_EMPLOYEE_TOKEN}
      data-api-base={process.env.NEXT_PUBLIC_WIDGET_API_BASE}
      strategy="lazyOnload"
    />
  );
}