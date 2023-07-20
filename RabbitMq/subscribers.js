import service from '../api/service.js';
import { queuesNames } from '../enums.js';
export default () => {
  subscribe(queuesNames.DELETE_WEBSITE, service.mailDeletion);
  subscribe(queuesNames.CREATE_BACKUP, service.mailcreateBackup);
  subscribe(queuesNames.CREATE_WEBSITE, service.mailcreateWebsite);
  subscribe(queuesNames.CHANGE_STATUS, service.mailsubscribeChangeStatus);
  subscribe(queuesNames.CREATE_BECEND, service.mailrestoredFor);
};
