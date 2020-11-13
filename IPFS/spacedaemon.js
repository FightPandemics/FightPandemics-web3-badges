import { SpaceClient } from '@fleekhq/space-client';

  // default port exposed by the daemon for client connection is 9998
  const client = new SpaceClient({
    url: `http://0.0.0.0:9998`,
  });

  client
    .createBucket({ slug: 'myNewBucket'})
    .then((res) => {
      const bucket = res.getBucket();

      console.log(bucket.getKey());
      console.log(bucket.getName());
      console.log(bucket.getPath());
      console.log(bucket.getCreatedat());
      console.log(bucket.getUpdatedat());
    })
    .catch((err) => {
      console.error(err);
    });

  /* Or using Async/Await */

  const asyncFunc = async () => {
    const res = await client.createBucket({ slug: 'my-bucket'});
    const bucket = res.getBucket();

    console.log(bucket.getName());
    ...
  };
