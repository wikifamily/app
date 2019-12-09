define('ext.wikia.AffiliateService.units', [], function () {
	// disneyplus svg logos
	var disneyplusLogoLight = '<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="543.338" viewBox="0 9.115 1000 543.338"><path fill="#101C50" d="M453.988 377.341c.553.076.673.098 1.212.168 9.006 1.224 17.856 2.847 24.63 5.875 6.278 2.772 9.958 6.28 13.318 12.533 5.109 9.482 5.442 22.766.825 32.82-3.449 7.481-11.02 13.754-17.932 17.079-7.178 3.48-14.25 5.137-22.361 6.063-14.186 1.562-29.507-1.377-42.272-7.551-7.552-3.688-16.774-10.039-21.426-18.221-3.421-5.994-3.312-13.793.85-19.49 6.634-9.08 20.843-11.079 31.545-10.7 8.159.316 22.85 2.838 30.597 5.594 2.147.776 10.066 3.861 11.448 5.276.973.984 1.604 2.414 1.167 3.736-1.77 5.414-14.926 8.268-18.725 8.841-10.17 1.558-15.447-2.291-27.009-6.856-2.87-1.124-6.695-2.371-9.617-2.641-5.249-.5-11.589.97-12.591 6.7-.498 2.953 2.965 5.715 5.606 6.876 6.202 2.664 11.244 3.622 17.348 3.704 18.032.297 38.297-2.672 53.046-13.122 2.019-1.441 4.002-3.55 4.023-6.209.064-5.369-9.349-8.652-9.349-8.652-9.935-4.142-28.292-6.158-37.749-6.937-9.924-.859-25.539-2.144-29.288-2.696-3.86-.551-8.053-1.33-11.396-2.828-3.358-1.517-6.643-4.912-7.618-8.668-1.729-6.771.477-15.079 4.237-20.488 9.855-14.168 32.94-19.549 50.186-21.686 16.692-2.077 43.677-2.056 60.072 6.656 2.531 1.357 3.824 2.619 3.295 5.325-1.068 5.08-4.886 8.354-9.514 9.789-4.855 1.545-14.898 2.147-19.309 2.425-19.766 1.108-43.652.527-62.479 5.661-1.475.421-4.023 1.108-4.851 2.033-2.947 3.199 5.47 4.113 7.273 4.479.536.128.64.146 1.199.207l41.609 4.905m-117.589-88.137s3.215-4.822 5.909-8.48c4.905-6.662 13.782-15.901 20.467-21.621 2.045-1.747 4.456-3.726 4.456-3.726s-3.771.39-5.908.827c-5.072.987-12.509 5.93-16.225 9.124-6.132 5.249-12.875 13.782-9.824 21.364a67.985 67.985 0 001.125 2.512m34.088 9.122c9.687-.668 18.761-3.457 27.209-8.143 8.285-4.636 20.471-13.676 19.207-24.303-.384-3.44-2.636-6.037-5.479-7.249-3.695-1.601-5.622-1.343-10.342.06-3.429 1.003-4.974 1.612-8.212 3.465-9.503 5.521-22.977 17.337-30.292 26.767-1.688 2.224-3.398 4.711-4.736 6.416-.844 1.051-1.5 2.016-1.418 2.273.292 1.069 10.28.971 14.063.714m-24.664 18.116c-.999 1.057-2.056 3.605-3.152 5.45-.586.987-1.671 2.258-2.389 2.768-2.521 1.854-4.657 1.94-7.091-.202-3.413-3.019-5.387-7.688-5.527-12.23-.073-1.982.267-4.175-.108-5.846-.621-2.821-3.444-5.727-4.966-8.424-1.787-3.177-3.233-8.717-3.413-12.294-.613-11.153 5.266-21.427 12.903-29.53 7.691-8.194 17.753-15.004 28.696-19.64 10.344-4.357 25.502-7.327 36.861-3.393 3.698 1.267 8.85 4.414 11.439 7.711.55.684.998 1.424 1.562 1.786.505.322 1.826.449 2.877.642 3.623.628 8.839 3.371 10.97 5.198 4.281 3.693 6.626 7.223 7.711 12.346 2.176 10.308-3.76 21.617-10.521 28.5-11.577 11.846-23.01 20.175-37.82 25.973-6.505 2.541-16.636 4.915-24.016 4.251-2.292-.19-4.646-.794-6.878-.942-1.139-.098-5.303-1.172-5.748-1.475-.552-.424-1.265-.793-1.39-.649m13.227 22.854c.451.076 1.146.278 1.744.508 5.192 1.975 7.328 6.78 8.607 12.058 2.964 12.256 4.229 39.37 4.722 49.983.362 7.966.561 15.803.895 23.677.283 6.668.815 15.533-.575 21.78-.505 2.247-2.008 4.86-4.16 6.198-2.465 1.578-8.076 1.698-11.16 1.062-7.602-1.572-10.072-6.46-11.157-13.978-2.579-17.939-1.337-53.146.185-68.002.506-4.907 2.354-20.629 4.916-27.221.875-2.223 2.738-6.7 5.983-6.065m-231.264 29.847s-11.314.801-19.101 1.665c-9.907 1.067-28.522 4.281-39.267 8.118-3.223 1.154-9.77 3.894-10.339 7.208-.598 3.435 1.534 6.121 3.905 8.9 1.371 1.614 9.131 9.079 11.307 10.893 9.121 7.615 27.616 19.359 41.238 25.062 4.68 1.936 12.422 4.708 12.422 4.708s-.575-22.044-.472-43.758c.06-11.455.307-22.796.307-22.796m207.454 8.773c.648 5.922-.874 17.119-1.138 18.596-.482 3.404-3.049 11.256-3.475 12.214-2.072 4.772-4.115 8.682-6.28 12.582-3.71 6.677-12.532 17.262-17.769 21.792-19.475 16.833-49.623 26.417-75.487 29.574-17.55 2.12-37.716 1.809-56.312-1.632-6.4-1.164-15.924-3.359-15.924-3.359s.031 3.808-.274 6.486c-.148 1.222-1.068 4.438-1.584 5.48-1.352 2.793-3.572 4.234-6.8 4.854-3.896.723-8.028.964-11.628-.575-5.911-2.487-8.033-8.017-9.063-14.395-.833-5.101-1.705-13.968-1.705-13.968s-4.422-2.094-8.109-3.934c-11.325-5.58-22.081-12.341-31.491-19.294-2.607-1.946-13.807-11.326-16.279-13.655-6.932-6.581-13.168-13.128-17.912-21.529-3.688-6.563-4.75-12.388-1.945-19.342 3.868-9.693 17.765-16.991 27.276-21.15 6.981-3.082 28.688-10.17 37.705-11.484 4.259-.609 10.865-1.792 11.271-2.056.166-.127.281-.235.401-.372.208-.293.559-9.888.491-13.398-.088-3.451 2.554-26.117 3.403-30.91.443-2.592 2.406-12.57 4.41-15.189 1.311-1.77 3.629-1.627 5.519-.465 10.342 6.431 13.484 28.734 14.253 40.082.46 6.914.689 17.314.689 17.314s11.864-.351 19.162-.144c7.092.165 14.909 1.284 22.27 2.457 9.424 1.511 27.793 5.518 38.328 10.859 8.675 4.398 16.795 11.808 19.426 19.65 2.444 7.189 2.078 12.164-1.645 18.652-4.186 7.326-12.104 12.771-20.132 13.226-2.389.138-11.381-1.057-14.148-3.199-1.085-.854-1.029-2.395-.246-3.44.297-.367 4.5-2.602 6.981-3.906a16.07 16.07 0 003.244-2.29c2.061-1.815 3.916-3.813 3.709-6.155-.285-3.04-3.502-4.915-6.568-6.121-14.386-5.715-43.109-10.459-56.989-11.28-5.433-.319-13.161-.592-13.161-.592l1.634 76.646s6.389 1.217 11.424 2.033c2.889.438 15.13 1.54 18.383 1.62 24.768.654 52.412-1.564 75.142-12.29 9.979-4.696 19.134-10.543 26.065-18.458 9.135-10.473 13.919-24.806 12.653-39.777-1.388-16.35-12.895-35.759-22.084-47.577-24.279-31.223-65.896-56.907-102.51-71.965-37.38-15.363-74.324-24.201-113.995-25.681-10.227-.379-32.526.137-43.798 3.255-1.61.454-3.233.996-4.728 1.332-1.181.289-3.042 1.071-3.553 1.484-.283.229-.563.546-.563.546s.695.384 1.359.665c1.194.521 6.22.833 8.821 1.309 2.327.438 4.75 1.66 5.709 3.365.911 1.621 1.025 2.899-.064 4.251-2.554 3.106-12.167 2.582-16.4 1.912-4.399-.701-9.876-2.047-10.882-5.877-1.167-4.511.976-8.933 3.291-13.021 4.651-8.179 11.313-12.433 21.069-15.097 13.857-3.813 31.354-6.479 44.439-6.979 29.616-1.119 57.646 4.06 86.341 12.772 16.423 4.966 37.924 13.299 53.665 20.878 11.295 5.446 29.091 15.461 39.088 22.006 3.153 2.081 21.604 15.638 24.47 18.021 5.979 4.888 13.799 11.914 19.462 17.533 10.956 10.857 24.583 27.499 31.203 40.708 1.593 3.163 2.827 6.275 4.882 9.941.707 1.256 3.731 8.768 4.234 10.938.498 2.147 1.228 5.303 1.331 5.428.146 1.153 1.548 7.607 1.438 10.095m372.323-16.947c-13.869 3.198-50.34 4.974-50.34 4.974l-4.599 14.406s18.226-1.556 31.485-.171c0 0 4.296-.499 4.801 4.877.171 5.014-.426 10.394-.426 10.394s-.275 3.255-4.888 4.083c-4.999.833-39.284 2.159-39.284 2.159l-5.552 18.778s-2.063 4.341 2.561 3.102c4.296-1.15 40.22-7.891 44.899-6.921 5.014 1.245 10.563 7.93 8.959 14.022-1.912 7.551-37.767 30.418-59.602 28.822 0 0-11.474.74-21.172-14.745-9.032-14.756 3.423-42.696 3.423-42.696s-5.709-13.043-1.572-17.464c0 0 2.462-2.234 9.639-2.739l8.788-18.181s-10.01.689-15.965-6.675c-5.547-6.986-6.012-10.197-1.759-12.126 4.548-2.246 46.234-9.854 74.919-8.889 0 0 9.969-.979 18.615 16.313.002.001 4.19 6.994-2.93 8.677m-107.891 69.906c-3.676 8.647-13.387 17.875-25.451 12.139-11.909-5.748-30.878-44.572-30.878-44.572s-7.201-14.477-8.586-14.104c0 0-1.556-2.827-2.51 12.993-.992 15.753.191 46.47-6.093 51.305-5.953 4.848-13.161 2.918-16.899-2.746-3.398-5.58-4.812-18.839-2.958-42.126 2.179-23.332 7.599-48.156 14.524-55.886 6.915-7.678 12.467-2.104 14.631-.082 0 0 9.25 8.384 24.504 33.003l2.692 4.554s13.862 23.259 15.31 23.205c0 0 1.133 1.069 2.143.301 1.455-.416.868-7.874.868-7.874s-2.876-25.348-15.522-68.252c0 0-1.912-5.35-.619-10.363 1.284-5.066 6.362-2.688 6.362-2.688s19.6 9.855 29.114 41.766c9.451 31.921 3.1 60.715-.632 69.427m210.945-19.112c-8.922 15.567-34.11 48.163-67.584 40.467-11.054 26.806-20.34 53.923-25.65 94.499 0 0-1.167 7.885-7.72 5.146-6.494-2.273-17.191-13.07-19.355-28.007-2.328-19.621 6.407-52.79 24.26-90.823-5.207-8.465-8.757-20.559-5.718-37.78 0 0 4.484-31.979 36.601-60.802 0 0 3.85-3.325 6.082-2.301 2.459 1.031 1.32 11.437-.631 16.497-2.027 5.031-16.325 29.784-16.325 29.784s-8.919 16.723-6.409 29.913c16.844-25.897 55.134-78.119 78.867-61.651 7.972 5.704 11.647 18.111 11.647 31.48.005 11.743-2.827 24.224-8.065 33.578m-6.926-41.014s-1.321-10.296-11.387 1.047c-8.658 9.572-24.274 27.506-36.845 51.865 13.19-1.481 25.912-8.637 29.759-12.282 6.254-5.549 20.823-20.604 18.473-40.63m191.327-2.344H933.67c-1.223-20.851-3.74-41.162-7.697-62.08a4.57 4.57 0 00-4.483-3.735h-14.143a4.14 4.14 0 00-3.194 1.518 4.177 4.177 0 00-.878 3.451c4.019 20.242 6.564 40.165 7.82 60.866h-59.021c-2.75 0-4.984 2.227-4.984 4.966v12.756a4.994 4.994 0 004.984 4.988h59.866c.038 3.148.069 5.967.069 8.612 0 18.384-.793 33.528-2.646 50.618a4.571 4.571 0 001.181 3.605 4.581 4.581 0 003.417 1.534h13.117a4.953 4.953 0 004.938-4.475c1.792-17.206 2.56-32.538 2.56-51.283 0-2.635-.028-5.464-.067-8.612h60.51c2.743 0 4.982-2.243 4.982-4.988V373.39a4.992 4.992 0 00-4.983-4.985"/><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="930.503" y1="184.483" x2="189.496" y2="84.295"><stop offset="0" stop-color="#101c50"/><stop offset=".236" stop-color="#0d267a"/><stop offset=".497" stop-color="#085aa4"/><stop offset=".655" stop-color="#058bbf"/><stop offset="1" stop-color="#b1ffff"/></linearGradient><path fill="url(#a)" d="M174.713 197.472a4.938 4.938 0 00-.58 4.366 5.055 5.055 0 003.118 3.129l10.997 3.701a6.61 6.61 0 001.974.317 6.114 6.114 0 005.084-2.703c36.022-52.919 84.774-96.98 140.994-127.42 58.04-31.43 123.799-48.055 190.188-48.055 80.188 0 157.558 23.654 223.751 68.4 64.587 43.646 114.747 104.54 145.059 176.101a5.763 5.763 0 005.315 3.523h13.134a4.592 4.592 0 003.792-2.027 4.566 4.566 0 00.45-4.284c-31.256-76.943-84.11-142.534-152.869-189.657C694.732 34.62 612.214 9.115 526.488 9.115c-141.721 0-273.23 70.416-351.775 188.357"/></svg>';
	var disneyplusLogoDark = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="58" viewBox="0 0 100 58.004"><defs><linearGradient id="a"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient xlink:href="#a" id="d" x1="241.894" y1="1814.875" x2="-177.075" y2="1693.239" gradientUnits="userSpaceOnUse" gradientTransform="translate(-287.416 109.473)"/><linearGradient xlink:href="#b" id="f" x1="-496.534" y1="1010.311" x2="-820.265" y2="966.404" gradientUnits="userSpaceOnUse" gradientTransform="translate(176.96 -162.35) scale(.1845)"/><linearGradient id="b"><stop offset="0" stop-color="#0cffff" stop-opacity=".996"/><stop offset=".474" stop-color="#0069e3" stop-opacity=".612"/><stop offset="1" stop-color="#0066e2" stop-opacity="0"/></linearGradient><filter id="e" x="-.033" width="1.066" y="-.088" height="1.175" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="4.924"/></filter><filter id="c" x="-.04" width="1.081" y="-.117" height="1.234" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="8.254"/></filter></defs><path d="M-327.156 1589.397c-9.94-.01-20.08 1.325-29.75 4.752 0 0-2.792-.118-5.235 3.725-2.618 3.725-4.829 6.267-3.49 9.046 1.337 2.838 8.144 4.08 14.252 1.951 0 0 2.791-1.775-.7-2.957-3.49-1.183-5.408-1.477-5.408-1.477s-1.746-.355.174-1.3c1.745-.888 21.99-7.628 57.708 1.89 35.776 9.223 84.349 38.549 82.895 69.173-1.338 30.566-48.457 31.925-48.457 31.925s-9.658.531-22.572-1.952c-.291-9.991-.698-27.135-.698-37.481 18.441 0 36.997 3.132 38.51 7.862 0 0 .932 2.07-3.257 4.139-3.781 1.655-6.748 3.074-3.49 4.612 0 0 4.652 2.187 7.56 1.95 2.91-.236 10.356-3.666 11.054-11.943.757-8.395-8.783-15.843-23.093-18.326-10.878-2.128-16.813-2.838-26.586-2.365-.117-9.105-1.337-20.516-3.315-23.176-2.443-3.547-5.178-8.276-7.33-2.955-1.804 4.434-3.2 14.483-3.782 27.49-15.009 2.542-31.762 8.987-36.823 15.372-5.41 7.095 0 12.828.582 13.42.349.59 11.402 16.79 35.253 27.787.465 4.375 1.28 9.164 2.908 11.825 3.723 5.557 10.472 1.655 11.286.709.698-.71 1.162-2.542 1.453-6.917 10.588 2.838 30.019 5.794 50.612-.592v.058c31.122-9.577 35.541-29.264 36.356-40.91.93-11.825-7.679-42.273-58.173-68.168 0 0-32.948-17.14-68.444-17.168zm152.105 8.325c-1.1-.018-1.81.033-1.81.033-23.27 1.95-30.95 18.386-31.997 22.761-.815 3.725-.465 9.283 4.072 13.421-1.338 3.607-.232 5.204.233 6.09.29 1.183 2.328 4.966 4.655 4.73 1.512-.237 2.733-1.36 4.77-5.085 4.653 2.07 10.121 2.957 18.15.178v.178c12.448-4.316 24.665-16.85 24.665-26.9.233-10.051-10.82-10.05-10.82-10.05h-.35c-1.484-4.612-8.268-5.3-11.568-5.356zm-10.247 11.977c-7.271 5.085-12.099 11.588-14.833 15.726-1.105-1.537-.989-3.843 1.338-7.686 3.2-5.084 7.91-7.448 13.495-8.04zm20.754 1.366c5.803.192 3.272 7.088 3.272 7.088-6.516 13.361-21.06 13.952-29.378 12.415 5.41-8.218 16.696-18.15 24.026-19.333.79-.139 1.48-.19 2.08-.17zm245.04 23.267c-1.891 0-3.571 1.505-3.414 3.36.859 10.137 1.643 19.424 2.187 28.553H52.865c-1.891 0-3.414 1.498-3.414 3.36v5.879c0 1.86 1.523 3.357 3.414 3.357h26.99c.278 8.885.284 17.844-.213 27.454-.096 1.858 1.524 3.36 3.415 3.36h6.186c1.891 0 3.28-1.504 3.414-3.36.663-9.13.942-18.3.801-27.454h28.11c1.89 0 3.414-1.496 3.414-3.357v-5.88c0-1.86-1.523-3.36-3.414-3.36H92.925c-.602-9.574-1.673-19.098-3.47-28.552-.347-1.83-1.52-3.36-3.412-3.36zm-167.003 7.942c-.698 0-1.469.296-1.76 1.479-.64 2.601.291 5.32.291 5.32 6.4 21.284 7.68 33.876 7.68 33.876s.232 3.784-.466 3.961c-.466.473-1.047-.117-1.047-.117-.698.06-7.561-11.589-7.561-11.589l-1.282-2.246c-7.562-12.238-12.042-16.376-12.042-16.376-1.047-1.064-3.838-3.902-7.328 0-3.316 3.843-5.934 16.257-6.981 27.904-.931 11.647-.233 18.329 1.396 21.107 1.978 2.78 5.47 3.783 8.378 1.418 3.2-2.423 2.5-17.736 3.082-25.6.407-7.921 1.164-6.502 1.164-6.502.698-.236 4.188 6.976 4.188 6.976s9.366 19.392 15.3 22.23c5.817 2.779 10.644-1.775 12.39-6.09h.058c1.745-4.316 4.886-18.8.233-34.763-4.712-15.963-14.369-20.693-14.369-20.693s-.626-.295-1.324-.295zm89.554 6.278c-1.058-.051-2.485 1.172-2.485 1.172-15.706 14.426-18.032 30.387-18.032 30.387-1.455 8.632.348 14.78 2.908 18.92-8.784 19.036-13.088 35.591-11.925 45.405 1.164 7.509 6.4 12.829 9.599 14.011 3.2 1.3 3.781-2.66 3.781-2.66 2.618-20.279 7.155-33.818 12.507-47.18l.115.061c16.463 3.784 28.796-12.474 33.16-20.337 5.525-9.932 5.525-27.078-1.862-32.4-11.635-8.276-30.425 17.855-38.685 30.744-1.222-6.563 3.14-14.959 3.14-14.959s6.983-12.297 7.914-14.78c1.047-2.601 1.57-7.685.29-8.276a1.05 1.05 0 00-.425-.108zm-144.71 1.926c-2.194.015-3.612.074-3.612.074-8.26.71-27.284 4.137-29.96 13.005-2.56 8.395-.232 11.47-.232 11.47 2.443 4.315 18.791 4.08 23.154 4.316 4.596.177 16.463 1.655 20.535 4.02 4.13 2.542 1.395 5.676 1.395 5.676-6.807 7.745-29.668 8.986-35.486 5.557-2.326-1.596-2.907-3.133-.58-5.735 2.385-2.778 10.063 1.3 9.19 1.005-.93-.532 3.725 2.543 10.007 2.72 6.515.119 10.994-2.247 11.343-4.611.232-2.188-5.585-4.317-5.585-4.317-19.371-5.498-26.933-.768-26.933-.768-10.53 6.74-2.735 15.609-2.735 15.609 17.045 18.446 43.456 6.385 46.539 3.783 2.967-2.778 4.304-5.498 4.42-13.184.116-7.508-3.082-10.82-3.082-10.82-5.585-6.976-20.826-7.094-25.363-7.094-4.189-.236-13.031-1.42-15.242-1.892-2.094-.414-.814-2.069-.814-2.069 1.92-2.779 40.895-5.557 40.895-5.557 4.014-.65 4.422-2.956 5.352-4.612v-.059c.698-1.596.116-2.66.116-2.66-3.185-3.547-16.743-3.902-23.323-3.858zm113.166.03c-13.857.025-31.985 3.37-34.057 4.478-2.094.946-1.861 2.482.815 6.03 2.908 3.665 7.854 3.369 7.854 3.369l-4.364 9.104c-3.49.296-4.655 1.301-4.655 1.301-2.036 2.365.7 8.868.7 8.868s-6.108 13.895-1.57 21.285c4.711 7.745 10.354 7.389 10.354 7.389 10.703.769 28.387-10.7 29.318-14.425.815-3.074-1.979-6.503-4.422-7.094-2.327-.473-20.011 2.956-22.105 3.547-2.269.591-1.28-1.537-1.28-1.537l2.735-9.34s16.87-.77 19.37-1.185c2.153-.413 2.329-2.01 2.329-2.01s.29-2.719.174-5.32c-.233-2.542-2.327-2.366-2.327-2.366-6.515-.65-15.417.12-15.417.12l2.211-7.214s17.975-.886 24.782-2.483h.058c3.49-.827 1.512-4.375 1.512-4.375-4.363-8.69-9.307-8.098-9.307-8.098-.88-.03-1.784-.044-2.708-.043zm-160.563 1.323c-.7.021-1.495.348-2.404 1.143-2.909 2.601-3.084 18.682-3.49 31.807-.292 12.83.29 20.99 1.92 23.058 1.686 2.365 7.504 3.251 10.238 1.182h.059c2.618-2.01 1.338-21.402 1.338-21.402s-.989-21.283-1.338-25.422c-.233-4.079-1.747-6.03-2.91-7.803-.8-1.179-1.874-2.61-3.413-2.563zm216.69 13.99c1.398.138 1.67 2.17 1.67 2.17 1.106 9.932-5.991 17.441-9.074 20.22-1.92 1.833-8.145 5.44-14.544 6.149 6.05-12.179 13.73-21.165 18.034-25.895 1.833-2.128 3.076-2.728 3.915-2.644zm-330.029 1.343c0 8.928.118 15.253-1.162 32.99-11.052-4.02-22.572-10.466-31.996-20.694 0 0-3.49-3.784 1.513-6.149 4.654-2.128 14.543-4.964 31.645-6.146z" transform="matrix(.185 0 0 .185 72.443 -271.891)" fill-opacity=".706" filter="url(#c)"/><path d="M69.415 35.701c-1.256.295-4.572.458-4.572.458l-.408 1.33s1.642-.14 2.844-.02c0 0 .386-.034.43.435.02.48-.033.982-.033.982s-.032.295-.43.371c-.46.076-3.573.218-3.573.218l-.505 1.724s-.182.392.237.283c.386-.109 3.649-.741 4.078-.654.45.109.966.742.816 1.309-.172.687-3.435 2.803-5.41 2.661 0 0-1.04.066-1.91-1.363-.837-1.364.29-3.927.29-3.927s-.505-1.2-.13-1.636c0 0 .216-.186.86-.24l.804-1.68s-.912.055-1.448-.622c-.494-.654-.537-.938-.15-1.112.407-.219 4.185-.906 6.782-.819 0 0 .913-.109 1.718 1.495 0 0 .365.654-.28.807m-9.798 6.458c-.322.796-1.213 1.636-2.287 1.123-1.094-.524-2.822-4.101-2.822-4.101s-.644-1.331-.773-1.287c0 0-.14-.262-.215 1.2-.107 1.45.022 4.275-.569 4.723-.536.436-1.18.25-1.545-.262-.3-.513-.43-1.745-.258-3.894.193-2.15.676-4.44 1.288-5.149.644-.72 1.16-.196 1.353 0 0 0 .826.764 2.221 3.022l.236.414s1.267 2.149 1.396 2.138c0 0 .107.11.193.022.129-.033.086-.73.086-.73s-.236-2.324-1.417-6.251c0 0-.172-.502-.054-.982.108-.436.57-.218.57-.218s1.78.873 2.65 3.818c.859 2.945.28 5.617-.043 6.414m-8.747-7.56c-.172.306-.247.731-.987.851 0 0-7.191.513-7.546 1.026 0 0-.236.305.15.381.408.088 2.04.306 2.813.35.837 0 3.649.021 4.68 1.308 0 0 .59.611.568 1.997-.021 1.418-.268 1.92-.816 2.432-.569.48-5.441 2.705-8.586-.698 0 0-1.438-1.636.504-2.88 0 0 1.396-.872 4.97.142 0 0 1.073.393 1.03.796-.064.437-.89.873-2.093.851-1.159-.033-2.018-.6-1.846-.502.161.055-1.256-.698-1.696-.185-.429.48-.322.763.108 1.058 1.073.633 5.291.404 6.547-1.025 0 0 .504-.578-.258-1.048-.751-.436-2.94-.709-3.789-.741-.805-.044-3.82 0-4.271-.797 0 0-.43-.567.043-2.116.493-1.636 4.003-2.269 5.527-2.4 0 0 4.186-.174 4.97.699 0 0 .107.196-.022.49m-11.87 9.6c-.505.381-1.578.218-1.89-.219-.3-.381-.407-1.887-.354-4.254.075-2.421.108-5.388.644-5.868.537-.47.859-.055 1.074.262.214.327.493.687.536 1.44.065.763.247 4.69.247 4.69s.236 3.578-.247 3.948m1.063-12.762c-1.481.513-2.49.35-3.349-.033-.376.688-.601.895-.88.939-.43.043-.805-.655-.859-.873-.086-.164-.29-.458-.043-1.124-.837-.763-.901-1.788-.751-2.476.193-.807 1.61-3.84 5.903-4.2 0 0 2.104-.152 2.469.982h.064s2.04 0 1.996 1.855c0 1.854-2.253 4.167-4.55 4.963m1.91-5.312c-1.352.218-3.434 2.05-4.433 3.567 1.535.283 4.218.174 5.42-2.291 0 0 .57-1.549-.987-1.276m-5.935 1.2c-.43.709-.45 1.134-.247 1.418.504-.764 1.395-1.964 2.737-2.902-1.03.11-1.9.546-2.49 1.484M72.635 44.11c-.988 2.465-1.825 4.963-2.308 8.705 0 0-.107.73-.697.49-.59-.218-1.557-1.2-1.771-2.585-.215-1.81.58-4.865 2.2-8.377-.472-.763-.805-1.898-.537-3.49 0 0 .43-2.946 3.327-5.607 0 0 .344-.295.537-.196.236.109.14 1.047-.053 1.527-.172.458-1.46 2.727-1.46 2.727s-.805 1.549-.58 2.76c1.524-2.379 4.991-7.2 7.138-5.673 1.363.982 1.363 4.145.343 5.978-.805 1.45-3.08 4.45-6.118 3.752m4.465-7.417c-.794.872-2.21 2.53-3.327 4.777 1.18-.13 2.33-.796 2.683-1.134.57-.513 1.879-1.898 1.675-3.73 0 0-.13-.96-1.03.087m-48.084 8.693c-3.8 1.178-7.384.633-9.338.11-.053.807-.14 1.145-.268 1.276-.15.174-1.395.894-2.082-.131-.3-.491-.451-1.375-.537-2.182-4.4-2.029-6.44-5.017-6.504-5.127-.107-.109-1.106-1.167-.107-2.476.933-1.178 4.024-2.367 6.794-2.836.107-2.4.364-4.254.697-5.072.397-.982.902-.109 1.353.545.364.491.59 2.597.611 4.276 1.803-.087 2.898.044 4.905.437 2.64.458 4.4 1.832 4.261 3.381-.129 1.527-1.502 2.16-2.04 2.204-.536.043-1.394-.36-1.394-.36-.601-.284-.054-.546.644-.851.772-.382.6-.764.6-.764-.278-.872-3.702-1.45-7.104-1.45 0 1.908.075 5.072.128 6.915 2.383.458 4.165.36 4.165.36s8.693-.25 8.94-5.89c.268-5.65-8.693-11.06-15.294-12.763-6.59-1.756-10.325-.512-10.647-.349-.354.175-.032.24-.032.24s.354.055.998.273c.644.218.128.545.128.545-1.126.393-2.382.164-2.63-.36-.246-.512.162-.981.645-1.668.45-.71.966-.688.966-.688 8.157-2.89 18.117 2.291 18.117 2.291 9.316 4.778 10.905 10.395 10.733 12.577-.15 2.149-.966 5.781-6.708 7.548M11.114 37.6c-.923.437-.28 1.135-.28 1.135 1.74 1.887 3.865 3.076 5.904 3.817.236-3.272.215-4.44.215-6.086-3.156.218-4.98.741-5.84 1.134" fill="#fff"/><path d="M87.624 30.706c-.35 0-.66.277-.63.62.158 1.87.303 3.584.403 5.268h-4.871a.624.624 0 00-.63.62v1.084c0 .344.281.62.63.62h4.98c.05 1.64.052 3.292-.04 5.065-.017.343.281.62.63.62h1.142c.349 0 .605-.278.63-.62.122-1.684.173-3.376.147-5.065h5.187c.349 0 .63-.276.63-.62v-1.084c0-.344-.281-.62-.63-.62h-5.285a42.438 42.438 0 00-.64-5.268c-.064-.338-.28-.62-.63-.62z" fill="#fff" fill-rule="evenodd"/><path d="M-332.648 1748.885c-81.556 0-150.595 41.963-173.868 99.829l13.019 8.514c13.125-50.93 79.79-96.796 161.386-96.796 88.974 0 158.159 74.632 171.599 123.432l11.444-.11c-5.364-40.07-78.125-134.869-183.58-134.869z" transform="translate(116.275 -327.169) scale(.18877)" fill="url(#d)" fill-rule="evenodd" filter="url(#e)"/><path d="M53.735 2.466c-15.047 0-27.785 7.742-32.079 18.418l2.402 1.571C26.48 13.06 38.78 4.596 53.834 4.596c16.416 0 29.181 13.77 31.66 22.774l2.112-.02c-.99-7.393-14.414-24.884-33.87-24.884z" fill="url(#f)" fill-rule="evenodd"/></svg>';
	// ddb svg logos
	var ddbLogoLight = '<svg viewBox="0 0 198 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M88.468 18.895c0-.298.05-.796.149-1.64.099-.846.644-3.332 2.825-4.725-.1 0-.248-.05-.347-.05-.297 0-1.19-.05-2.429.399.496-.746 2.33-1.99 3.024-2.338.05-.05.148-.099.198-.099-.793-2.536-2.478-4.624-4.857-5.867-1.487-.796-3.024-1.194-5.105-1.244h-4.163c-3.321 0-4.857-.05-6.047-.298-.991-.248-1.883-.795-1.883-.795l-.248-.15.05.299c0 .1.247 2.337 2.924 4.326.495.398.892.746.892 2.038v12.034c0 1.292-.248 1.64-.843 1.988-.644.398-1.982 1.144-1.982 1.194l-.446.248h10.854c3.023 0 4.956-.497 6.988-1.889.396-.249.743-.547 1.04-.796-.197-1.541.05-2.933.249-3.729 0-.05-.546.448-.843 1.094zm-6.939.249H79.2V8.404h2.33c3.072 0 4.807 1.939 4.807 5.37 0 3.43-1.735 5.37-4.808 5.37zm30.084 2.685c.199-.398.298-.895.298-1.393 0-.497-.149-.994-.347-1.392l.595.1c.396.05 1.14.547 1.14 1.293 0 .894-.893 1.292-1.686 1.392zm11.499.497c-2.082 1.392-3.965 1.89-6.988 1.89h-.099c.495-.597.743-1.393.743-2.188 0-1.144-.545-2.188-1.437-2.884h1.288c3.073 0 4.808-1.94 4.808-5.37 0-3.431-1.735-5.37-4.808-5.37h-2.329v1.342c-.347-.05-.644-.1-.991-.1-.546 0-1.19.1-1.339.2a4.268 4.268 0 011.884-.896c-2.181-.497-4.213.746-4.51 1.094.247-.547.743-1.044 1.09-1.392a9.522 9.522 0 00-1.883.945v-.895c0-1.343-.347-1.69-.892-2.039-2.677-1.94-2.925-4.227-2.925-4.326l-.049-.298.248.149s.892.597 1.883.795c1.14.249 2.726.299 6.047.299h4.163c2.081.1 3.618.447 5.105 1.243 3.37 1.74 5.352 5.171 5.352 9.149 0 2.436-.793 4.823-2.18 6.514-.546.845-1.289 1.541-2.181 2.138zm-10.507-4.127c-.744 0-1.537.15-1.537.15-.148-.15-1.14-.896-1.586-.995.793.845.546 1.74.347 2.038a.853.853 0 01-.694.398.949.949 0 01-.594-.199v-4.873c.198-.248.396-.547.644-.795.545-.647 1.437-1.044 2.329-1.044.546 0 1.091.149 1.438.447l.297.199.248-.249c.149-.149.495-.298.842-.447v5.718c-.545-.249-1.09-.348-1.734-.348zm-.992-6.763c-1.833-.248-4.658.995-6.096 2.785.298-1.193 1.586-3.133 3.172-4.028 0 0-.793.995-.446 1.144.496.249 1.785-1.79 3.47-1.84 0 0-1.239.597-.992 1.044.199.299 1.041-.397 2.478-.397 1.785 0 3.371 1.094 4.114 1.939-1.239-.348-3.568.248-4.262.845-1.041-.795-3.073-.696-4.213.647-1.437 1.64-2.329 3.58-2.577 4.176-.496-.397-.942-.745-1.239-.994-.248-.199-.496-.298-.744-.398 1.338-1.89 4.114-4.773 7.335-4.923zM92.284 5.868c-.198-2.337.892-3.63 1.388-4.176C94.762.547 96.25-.1 98.48 0c3.469.199 5.154 2.586 5.154 5.122 0 1.342-.694 3.132-1.685 4.276l-.198-.2c-.645-.596-1.586-1.342-2.181-2.237 1.189-1.74.694-4.475-1.437-4.475-1.338 0-2.429 1.392-1.983 3.083-.198.746-.297 1.74-.149 2.486-1.536-.795-2.032-1.84-2.329-2.784-.396.795-.644 1.89-.347 2.933 0 .1-.892-.696-1.04-2.337zm.892 4.227c-.148.547-2.18 1.144-3.172 2.138 1.487-.298 2.181-.05 2.429.547.149.447-.05 1.044-.149 1.74.496-.547 2.181-1.69 3.42-1.939-.297-.1-1.04-.248-1.338-.248.892-1.045 2.874-1.393 3.965-1.144-.694-.05-2.082.348-2.627.795.496.1.942.2 1.338.348-.644.25-1.487 1.045-1.784 1.89.843-.597 2.577-.447 2.875.796.198.845-.397 1.59-.694 1.74.248.05.842 0 1.09-.15-.099.349-.595.945-.941 1.045.892 0 2.18-.597 2.527-1.442 0 0-.545.199-.793-.05-.248-.248.1-1.342.1-1.342s-.348.447-.645.199c-.297-.299.1-1.293.248-1.492-.298-.1-1.09-.199-1.438-.15.992-.347 3.222-.546 3.47-.099.198.348-.298 1.044-.298 1.044.397-.05 1.537 0 1.933.448.397.497.149 1.144.149 1.144.892-.448 1.685-1.84 1.487-3.232-.099.298-.496.745-.892.845.049-.448-.298-.696-.595-.796.149-.845-.198-1.939-1.437-3.132-1.041-1.044-3.023-2.437-2.924-4.277-.298.398-.546 1.542-.248 2.188.842.995 2.676 2.089 3.122 3.78-.793-1.99-4.659-3.531-4.51-6.266-.496.497-.793 2.437-.396 3.431.743.448 1.387 1.193 1.486 1.89-.694-1.592-3.519-1.89-4.311-3.78-.199.697-.1 1.542.297 2.089 0 0-.694-.249-2.18-.199.495.199 1.536 1.094 1.437 1.64zm8.029 2.287c-.842 0-1.09-.646-1.288-1.342.991.398 1.288 1.342 1.288 1.342zM112.01 25.36c.595.547 2.032.945 2.775.597-.446.795-2.527 1.89-4.46 1.392-1.834-.497-2.676-2.238-2.676-3.381-.893.895-.645 2.287 0 2.884-.694-.2-1.785-.945-1.983-2.287-.149-1.144.496-2.487-.694-3.53-.694-.647-1.834-1.542-2.527-2.09-1.487-1.143-.942-2.038-1.24-2.635-.247-.497-.892-.746-1.239-1.193-.396-.447-.346-1.094-.148-1.442-.05.497.297.895.793 1.094.545.199.991.05 1.487.298.545.348.297 1.194.693 1.542.347.248 1.289-.1 2.033.547.793.646 2.527 2.088 3.271 2.685 1.338 1.094 2.726-.15 2.279-1.442 1.388.795 1.537 3.083.397 3.878 1.09.249 3.023-.248 3.023-1.79 0-.945-.892-1.64-1.487-1.74 2.231-.199 4.164 1.342 4.164 3.331-.1 1.99-2.132 3.58-4.461 3.282zm-7.385-4.077l.149.149c-1.19 2.436-3.42 5.569-7.682 5.569a6.595 6.595 0 01-3.915-1.293 3.817 3.817 0 01-.893-.895c-.148-.199-.297-.348-.446-.547-.198-.248-.347-.248-.446-.1-.198.3.149 1.244.149 1.244-3.37-3.182-1.636-7.857-1.586-8.055.198-.597 0-.697-.198-.597-.298.1-.645.597-.645.597.248-2.835 2.875-4.575 2.875-4.575l.05.05c.297.447-.15.994-.199 2.784.496-.696 2.429-2.038 3.52-2.436-.348.447-.645 1.094-.645 2.039 0 0 .793-.896 1.784-.896.248 0 .496.05.694.15-3.767 3.68-2.18 8.254.991 8.254 1.784 0 3.569-1.99 4.312-3.332.545.547 1.487 1.343 2.131 1.89z" fill="#E40712"/><path d="M109.681 32.171c-8.773 0-17.595 6.017-17.595 15.614 0 9.944 8.773 15.215 17.495 15.215 8.822 0 17.644-5.221 17.644-15.215 0-9.846-8.772-15.614-17.544-15.614zm-.1 24.067c-3.865 0-8.623-2.934-8.623-8.453 0-5.669 4.46-8.702 8.673-8.702 3.866 0 8.772 2.685 8.772 8.801 0 5.818-4.906 8.354-8.822 8.354zM150.024 33.116h12.143l-2.28 2.586v26.453h-6.592c-1.239-3.928-13.877-13.973-15.017-17.255h-.099V59.62l2.28 2.536h-12.044l2.23-2.586V35.702l-2.28-2.636h9.764c.892 2.934 12.292 11.337 13.977 15.812h.099V35.702l-2.181-2.586zM179.315 32.47c-6.393 0-12.39.397-15.562.646l2.28 2.536v23.967l-2.28 2.536c3.221.248 9.565.646 15.959.646 13.034 0 18.288-6.414 18.288-15.166 0-9.1-7.186-15.165-18.685-15.165zm.298 23.718c-1.983 0-3.767-.1-4.957-.249V39.381c1.338-.149 2.379-.298 4.56-.298 5.601 0 9.912 2.387 9.912 8.453 0 5.818-3.915 8.652-9.515 8.652zM81.38 59.57l2.231 2.535H70.428l2.379-2.536-.05-6.017-13.63-20.436h13.878l-1.983 2.238 6.493 11.535h.1l6.343-11.535-1.883-2.238H94.96L81.33 53.652l.05 5.917zM61.853 55.541l-4.361 6.564h.05-25.178l2.28-2.536V35.652l-2.28-2.536 22.749-.05v.05l4.361 6.514H43.268v4.624h11.498l-4.362 6.564v.05l-7.137-.05v4.773l18.586-.05zM29.142 49.376c-1.09-1.044-2.527-1.84-4.41-2.387a7.755 7.755 0 002.081-.895c.644-.398 1.14-.796 1.586-1.293.446-.497.793-.994.991-1.541.248-.498.347-.995.347-1.492v-.945c0-1.144-.248-2.237-.793-3.182a7.105 7.105 0 00-2.28-2.437c-.99-.696-2.379-1.193-3.766-1.59a18.907 18.907 0 00-4.61-.548H.942l2.577 2.685v9.15H0l3.519 4.524v9.995L.942 62.105H19.18c3.42 0 6.394-.597 8.476-1.84 2.081-1.243 3.072-3.033 3.072-5.47v-1.64c0-1.492-.545-2.735-1.586-3.78zm-17.198-10.94h4.66c1.337 0 2.428.2 3.27.597.843.398 1.24 1.144 1.24 2.238v.944c0 .846-.298 1.492-.942 1.99-.645.497-1.487.745-2.578.745h-5.65v-6.514zm10.16 15.514c0 .597-.098 1.094-.346 1.442a3.255 3.255 0 01-.942.895 5.063 5.063 0 01-1.388.448c-.545.05-1.09.1-1.635.1h-5.849v-7.012h5.898c1.09 0 2.032.249 2.925.746.842.497 1.288 1.144 1.288 1.989v1.392h.05z" fill="#020202"/></svg>';
	var ddbLogoDark = '<svg width="198" height="63" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M88.468 18.895c0-.298.05-.796.149-1.64.099-.846.644-3.332 2.825-4.725-.1 0-.248-.05-.347-.05-.297 0-1.19-.05-2.429.399.496-.746 2.33-1.99 3.024-2.338.05-.05.148-.099.198-.099-.793-2.536-2.478-4.624-4.857-5.867-1.487-.796-3.024-1.194-5.105-1.244h-4.163c-3.321 0-4.857-.05-6.047-.298-.991-.248-1.883-.795-1.883-.795l-.248-.15.05.299c0 .1.247 2.337 2.924 4.326.495.398.892.746.892 2.038v12.034c0 1.292-.248 1.64-.843 1.988-.644.398-1.982 1.144-1.982 1.194l-.446.248h10.854c3.023 0 4.956-.497 6.988-1.889.396-.249.743-.547 1.04-.796-.197-1.541.05-2.933.249-3.729 0-.05-.546.448-.843 1.094zm-6.939.249H79.2V8.404h2.33c3.072 0 4.807 1.939 4.807 5.37 0 3.43-1.735 5.37-4.808 5.37zm30.084 2.685c.199-.398.298-.895.298-1.393 0-.497-.149-.994-.347-1.392l.595.1c.396.05 1.14.547 1.14 1.293 0 .894-.893 1.292-1.686 1.392zm11.499.497c-2.082 1.392-3.965 1.89-6.988 1.89h-.099c.495-.597.743-1.393.743-2.188 0-1.144-.545-2.188-1.437-2.884h1.288c3.073 0 4.808-1.94 4.808-5.37 0-3.431-1.735-5.37-4.808-5.37h-2.329v1.342c-.347-.05-.644-.1-.991-.1-.546 0-1.19.1-1.339.2a4.268 4.268 0 011.884-.896c-2.181-.497-4.213.746-4.51 1.094.247-.547.743-1.044 1.09-1.392a9.522 9.522 0 00-1.883.945v-.895c0-1.343-.347-1.69-.892-2.039-2.677-1.94-2.925-4.227-2.925-4.326l-.049-.298.248.149s.892.597 1.883.795c1.14.249 2.726.299 6.047.299h4.163c2.081.1 3.618.447 5.105 1.243 3.37 1.74 5.352 5.171 5.352 9.149 0 2.436-.793 4.823-2.18 6.514-.546.845-1.289 1.541-2.181 2.138zm-10.507-4.127c-.744 0-1.537.15-1.537.15-.148-.15-1.14-.896-1.586-.995.793.845.546 1.74.347 2.038a.853.853 0 01-.694.398.949.949 0 01-.594-.199v-4.873c.198-.248.396-.547.644-.795.545-.647 1.437-1.044 2.329-1.044.546 0 1.091.149 1.438.447l.297.199.248-.249c.149-.149.495-.298.842-.447v5.718c-.545-.249-1.09-.348-1.734-.348zm-.992-6.763c-1.833-.248-4.658.995-6.096 2.785.298-1.193 1.586-3.133 3.172-4.028 0 0-.793.995-.446 1.144.496.249 1.785-1.79 3.47-1.84 0 0-1.239.597-.992 1.044.199.299 1.041-.397 2.478-.397 1.785 0 3.371 1.094 4.114 1.939-1.239-.348-3.568.248-4.262.845-1.041-.795-3.073-.696-4.213.647-1.437 1.64-2.329 3.58-2.577 4.176-.496-.397-.942-.745-1.239-.994-.248-.199-.496-.298-.744-.398 1.338-1.89 4.114-4.773 7.335-4.923zM92.284 5.868c-.198-2.337.892-3.63 1.388-4.176C94.762.547 96.25-.1 98.48 0c3.469.199 5.154 2.586 5.154 5.122 0 1.342-.694 3.132-1.685 4.276l-.198-.2c-.645-.596-1.586-1.342-2.181-2.237 1.189-1.74.694-4.475-1.437-4.475-1.338 0-2.429 1.392-1.983 3.083-.198.746-.297 1.74-.149 2.486-1.536-.795-2.032-1.84-2.329-2.784-.396.795-.644 1.89-.347 2.933 0 .1-.892-.696-1.04-2.337zm.892 4.227c-.148.547-2.18 1.144-3.172 2.138 1.487-.298 2.181-.05 2.429.547.149.447-.05 1.044-.149 1.74.496-.547 2.181-1.69 3.42-1.939-.297-.1-1.04-.248-1.338-.248.892-1.045 2.874-1.393 3.965-1.144-.694-.05-2.082.348-2.627.795.496.1.942.2 1.338.348-.644.25-1.487 1.045-1.784 1.89.843-.597 2.577-.447 2.875.796.198.845-.397 1.59-.694 1.74.248.05.842 0 1.09-.15-.099.349-.595.945-.941 1.045.892 0 2.18-.597 2.527-1.442 0 0-.545.199-.793-.05-.248-.248.1-1.342.1-1.342s-.348.447-.645.199c-.297-.299.1-1.293.248-1.492-.298-.1-1.09-.199-1.438-.15.992-.347 3.222-.546 3.47-.099.198.348-.298 1.044-.298 1.044.397-.05 1.537 0 1.933.448.397.497.149 1.144.149 1.144.892-.448 1.685-1.84 1.487-3.232-.099.298-.496.745-.892.845.049-.448-.298-.696-.595-.796.149-.845-.198-1.939-1.437-3.132-1.041-1.044-3.023-2.437-2.924-4.277-.298.398-.546 1.542-.248 2.188.842.995 2.676 2.089 3.122 3.78-.793-1.99-4.659-3.531-4.51-6.266-.496.497-.793 2.437-.396 3.431.743.448 1.387 1.193 1.486 1.89-.694-1.592-3.519-1.89-4.311-3.78-.199.697-.1 1.542.297 2.089 0 0-.694-.249-2.18-.199.495.199 1.536 1.094 1.437 1.64zm8.029 2.287c-.842 0-1.09-.646-1.288-1.342.991.398 1.288 1.342 1.288 1.342zM112.01 25.36c.595.547 2.032.945 2.775.597-.446.795-2.527 1.89-4.46 1.392-1.834-.497-2.676-2.238-2.676-3.381-.893.895-.645 2.287 0 2.884-.694-.2-1.785-.945-1.983-2.287-.149-1.144.496-2.487-.694-3.53-.694-.647-1.834-1.542-2.527-2.09-1.487-1.143-.942-2.038-1.24-2.635-.247-.497-.892-.746-1.239-1.193-.396-.447-.346-1.094-.148-1.442-.05.497.297.895.793 1.094.545.199.991.05 1.487.298.545.348.297 1.194.693 1.542.347.248 1.289-.1 2.033.547.793.646 2.527 2.088 3.271 2.685 1.338 1.094 2.726-.15 2.279-1.442 1.388.795 1.537 3.083.397 3.878 1.09.249 3.023-.248 3.023-1.79 0-.945-.892-1.64-1.487-1.74 2.231-.199 4.164 1.342 4.164 3.331-.1 1.99-2.132 3.58-4.461 3.282zm-7.385-4.077l.149.149c-1.19 2.436-3.42 5.569-7.682 5.569a6.595 6.595 0 01-3.915-1.293 3.817 3.817 0 01-.893-.895c-.148-.199-.297-.348-.446-.547-.198-.248-.347-.248-.446-.1-.198.3.149 1.244.149 1.244-3.37-3.182-1.636-7.857-1.586-8.055.198-.597 0-.697-.198-.597-.298.1-.645.597-.645.597.248-2.835 2.875-4.575 2.875-4.575l.05.05c.297.447-.15.994-.199 2.784.496-.696 2.429-2.038 3.52-2.436-.348.447-.645 1.094-.645 2.039 0 0 .793-.896 1.784-.896.248 0 .496.05.694.15-3.767 3.68-2.18 8.254.991 8.254 1.784 0 3.569-1.99 4.312-3.332.545.547 1.487 1.343 2.131 1.89z" fill="#E40712"/><path d="M109.681 32.171c-8.773 0-17.595 6.017-17.595 15.614 0 9.944 8.773 15.215 17.495 15.215 8.822 0 17.644-5.221 17.644-15.215 0-9.846-8.772-15.614-17.544-15.614zm-.1 24.067c-3.865 0-8.623-2.934-8.623-8.453 0-5.669 4.46-8.702 8.673-8.702 3.866 0 8.772 2.685 8.772 8.801 0 5.818-4.906 8.354-8.822 8.354zM150.024 33.116h12.143l-2.28 2.586v26.453h-6.592c-1.239-3.928-13.877-13.973-15.017-17.255h-.099V59.62l2.28 2.536h-12.044l2.23-2.586V35.702l-2.28-2.636h9.764c.892 2.934 12.292 11.337 13.977 15.812h.099V35.702l-2.181-2.586zM179.315 32.47c-6.393 0-12.39.397-15.562.646l2.28 2.536v23.967l-2.28 2.536c3.221.248 9.565.646 15.959.646 13.034 0 18.288-6.414 18.288-15.166 0-9.1-7.187-15.165-18.685-15.165zm.298 23.718c-1.983 0-3.767-.1-4.957-.249V39.381c1.338-.149 2.379-.298 4.56-.298 5.601 0 9.912 2.387 9.912 8.453 0 5.818-3.915 8.652-9.515 8.652zM81.38 59.57l2.231 2.535H70.428l2.379-2.536-.05-6.017-13.63-20.436h13.878l-1.983 2.238 6.493 11.535h.1l6.343-11.535-1.883-2.238H94.96L81.33 53.652l.05 5.917zM61.853 55.541l-4.361 6.564h.05-25.178l2.28-2.536V35.652l-2.28-2.536 22.749-.05v.05l4.361 6.514H43.268v4.624h11.498l-4.362 6.564v.05l-7.137-.05v4.773l18.586-.05zM29.142 49.376c-1.09-1.044-2.527-1.84-4.41-2.387a7.755 7.755 0 002.081-.895c.644-.398 1.14-.796 1.586-1.293.446-.497.793-.994.991-1.541.248-.498.347-.995.347-1.492v-.945c0-1.144-.248-2.237-.793-3.182a7.105 7.105 0 00-2.28-2.437c-.99-.696-2.379-1.193-3.766-1.59a18.907 18.907 0 00-4.61-.548H.942l2.577 2.685v9.15H0l3.519 4.524v9.995L.942 62.105H19.18c3.42 0 6.394-.597 8.476-1.84 2.081-1.243 3.072-3.033 3.072-5.47v-1.64c0-1.492-.545-2.735-1.586-3.78zm-17.198-10.94h4.66c1.337 0 2.428.2 3.27.597.843.398 1.24 1.144 1.24 2.238v.944c0 .846-.298 1.492-.942 1.99-.645.497-1.487.745-2.578.745h-5.65v-6.514zm10.16 15.514c0 .597-.098 1.094-.346 1.442a3.255 3.255 0 01-.942.895 5.063 5.063 0 01-1.388.448c-.545.05-1.09.1-1.635.1h-5.849v-7.012h5.898c1.09 0 2.032.249 2.925.746.842.497 1.288 1.144 1.288 1.989v1.392h.05z" fill="#fff"/></svg>';

	var units = [
		{
			category: 'disneyplus',
			campaign: 'starwars',
			name: 'starwars-unit',
			country: ['US', 'CA', 'NL', 'AU', 'NZ'],
			heading: 'The Star Wars story lives forever',
			subheading: 'Watch Now On Disney+',
			link: 'https://disneyplus.bn5x.net/DrrRa',
			image: 'https://static.wikia.nocookie.net/f4fdc410-9a4c-4925-b39f-75f91f7a0e2d',
			logo: {
				light: disneyplusLogoLight,
				dark: disneyplusLogoDark,
			},
		},
		{
			category: 'disneyplus',
			campaign: 'disney',
			name: 'disney-unit',
			country: ['US', 'CA', 'NL', 'AU', 'NZ'],
			heading: 'Moana, a heroine kids and adults alike will admire and cheer for',
			subheading: 'Watch Now On Disney+',
			link: 'https://disneyplus.bn5x.net/333RX',
			image: 'https://static.wikia.nocookie.net/0da1d7a3-3a55-4370-8db0-a3304e53dcd6',
			logo: {
				light: disneyplusLogoLight,
				dark: disneyplusLogoDark,
			},
		},
		{
			category: 'disneyplus',
			campaign: 'marvel',
			name: 'marvel-unit',
			country: ['US', 'CA', 'NL', 'AU', 'NZ'],
			heading: 'All Avengers, All the Time',
			subheading: 'Watch Now On Disney+',
			link: 'https://disneyplus.bn5x.net/333RX',
			image: 'https://static.wikia.nocookie.net/370ee8c9-75ca-4e79-be37-92a60dbcebfa',
			logo: {
				light: disneyplusLogoLight,
				dark: disneyplusLogoDark,
			},
		},
		{
			category: 'disneyplus',
			campaign: 'mandalorian',
			name: 'mandalorian-unit',
			country: ['US', 'CA', 'NL', 'AU', 'NZ'],
			heading: 'A thrilling new adventure on the galactic frontier',
			subheading: 'Watch Now On Disney+',
			link: 'https://disneyplus.bn5x.net/333RX',
			image: 'https://static.wikia.nocookie.net/971b7d47-c4ca-4fb0-9ead-0db73eb6ce9c',
			logo: {
				light: disneyplusLogoLight,
				dark: disneyplusLogoDark,
			},
		},
		{
			category: 'disneyplus',
			campaign: 'pixar',
			name: 'pixar-unit',
			country: ['US', 'CA', 'NL', 'AU', 'NZ'],
			heading: 'The Incredibles- a family who saves the world together sticks together',
			subheading: 'Watch Now On Disney+',
			link: 'https://disneyplus.bn5x.net/NVVXv',
			image: 'https://static.wikia.nocookie.net/6e2a5be1-89a1-4486-9b24-591461e2e1cc',
			logo: {
				light: disneyplusLogoLight,
				dark: disneyplusLogoDark,
			},
		},
		{
			category: 'disneyplus',
			campaign: 'simpsons',
			name: 'simpsons-unit',
			country: ['US', 'CA', 'NL', 'AU', 'NZ'],
			heading: 'Don\'t have a cow man, relive the Simpsons',
			subheading: 'Watch Now On Disney+',
			link: 'https://disneyplus.bn5x.net/DrrRa',
			image: 'https://static.wikia.nocookie.net/803e11a2-7213-48bc-9bfe-828111661cec',
			logo: {
				light: disneyplusLogoLight,
				dark: disneyplusLogoDark,
			},
		},
		{
			category: 'ddb',
			campaign: 'ddb',
			name: 'ddb-unit',
			heading: 'The Official Digital Toolset for Dungeons & Dragons',
			subheading: 'Visit D&D Beyond',
			link: 'https://www.dndbeyond.com/intro',
			image: 'https://static.wikia.nocookie.net/e95c2f7f-3240-4a70-9f24-1c0ce6b26072',
			logo: {
				light: ddbLogoLight,
				dark: ddbLogoDark,
			},
		}
	];

	return units;
});
