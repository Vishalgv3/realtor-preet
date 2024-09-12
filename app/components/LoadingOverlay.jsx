// need to install spinners-react for this component to work
import { SpinnerCircular } from 'spinners-react';

export default function LoadingOverlay({ enabled, bgColor, showSpinner, spinnerColor }) {
    return (
        (enabled)
            ?
            <div className="flex justify-center items-center fixed z-50 inset-0 w-full h-full" style={{ backgroundColor: bgColor }}>
                {(showSpinner) ?
                    <SpinnerCircular
                        color={spinnerColor}
                        secondaryColor={bgColor}
                        thickness={150}
                        size={75} />
                    : <div></div>}
            </div>
            : <div></div>
    );
}