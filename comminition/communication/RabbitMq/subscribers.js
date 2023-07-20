import service from '../api/service.js';
import { queuesNames } from '../enums.js';

export default () => {
  subscribe(queuesNames.DELETE_WEBSITE, websiteService.mailDeletion);
  subscribe(queuesNames.CREATE_BACKUP, backupService.mailcreateBackup);
  subscribe(queuesNames.CREATE_WEBSITE, websiteService.mailcreateWebsite);
  subscribe(queuesNames.CHANGE_STATUS, websiteService.mailsubscribeChangeStatus);
  subscribe(queuesNames.CREATE_BECEND, backupService.mailrestoredFor);
};