import "./ProgressBar.css";

interface ProgressBarProps {
    /** Optional text displayed above the progress bar. */
    label?: string;

    /** Progress value between 0 and 100. */
    value: number;

    /** Whether to display the percentage value. */
    showValue?: boolean;
}

/**
 * A reusable progress bar component.
 *
 * Can be used for skills, project completion,
 * loading progress, upload progress, or any
 * other percentage-based value.
 *
 * @param label - Optional label displayed above the progress bar.
 * @param value - Progress value between 0 and 100.
 * @param showValue - Whether to display the percentage value.
 */
export const ProgressBar = ({
                                label,
                                value,
                                showValue = true,
                            }: ProgressBarProps) => {
    const progress = Math.min(Math.max(value, 0), 100);

    return (
        <div className="progress-container">
            {(label || showValue) && (
                <div className="progress-header">
                    {label && (
                        <span className="progress-label">
                            {label}
                        </span>
                    )}

                    {showValue && (
                        <span className="progress-value">
                            {progress}%
                        </span>
                    )}
                </div>
            )}

            <div
                className="progress"
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={label ?? "Progress"}
                title={`${progress}%`}
            >
                <div
                    className="progress-bar"
                    style={{width: `${progress}%`}}
                />
            </div>
        </div>
    );
};
