import { message } from 'antd';

/* Place messages just below the details sticky header - note: we need to revisit this when we get to list pages */
message.config({
    top: 80,
    duration: 2,
    maxCount: 3,
});