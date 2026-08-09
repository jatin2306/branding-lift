import Script from "next/script";

export default function WidgetScript() {
  return (
    <Script
      src="http://147.93.31.196:8001/static/widget.js"
      data-employee-token="A49r-HvOSi_wfdCtL9LKdlAzZYv01xgv"
      data-api-base="http://147.93.31.196:8001/api/widget"
      strategy="lazyOnload"
    />
  );
}
