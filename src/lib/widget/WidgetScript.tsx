import Script from "next/script";

export default function WidgetScript() {
  return (
    <Script
      src="https://liftbot.brandinglift.com/static/widget.js"
      data-workspace-token="ngZ-Gdb_tbbhMCNqtJRsT8hprb8Dy1o7"
      data-api-base="https://liftbot.brandinglift.com/api/widget"
      strategy="lazyOnload"
    />
  );
}