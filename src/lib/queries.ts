import { revalidatePath } from "next/cache"

export const upsertFunnelPage = async (
  // subaccountId: string,
  funnelPage: any,
  funnelId: string
) => {
  if ( !funnelId) return
  // const response = await db.funnelPage.upsert({
  //   where: { id: funnelPage.id || '' },
  //   update: { ...funnelPage },
  //   create: {
  //     ...funnelPage,
  //     content: funnelPage.content
  //       ? funnelPage.content
  //       : JSON.stringify([
  //           {
  //             content: [],
  //             id: '__body',
  //             name: 'Body',
  //             styles: { backgroundColor: 'white' },
  //             type: '__body',
  //           },
  //         ]),
  //     funnelId,
  //   },
  // })


  // revalidatePath(`/editor/funnels/${funnelId}`, 'page')
  // return body
}
export const createMedia = async (
  subaccountId: string,
  mediaFile: any
) => {

  
  // const response = await db.media.create({
  //   data: {
  //     link: mediaFile.link,
  //     name: mediaFile.name,
  //     subAccountId: subaccountId,
  //   },
  // })

  // return response
}
export const deleteMedia = async (mediaId: string) => {
  //delete media

  // const response = await db.media.delete({
  //   where: {
  //     id: mediaId,
  //   },
  // })
  // return response
}

export const getMedia = async (subaccountId: string) => {
  //get media files



  // const mediafiles = await db.subAccount.findUnique({
  //   where: {
  //     id: subaccountId,
  //   },
  //   include: { Media: true },
  // })
  // return mediafiles
}