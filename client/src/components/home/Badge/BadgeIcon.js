import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const BadgeIcon = ({ icon = "" }) => {
    return (
        <div className="ml-2">
            <FontAwesomeIcon icon={icon} className="w-4" />
        </div>
    );
};
