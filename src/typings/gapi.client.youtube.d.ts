/* eslint-disable camelcase */
interface IPlaylistItemsResource extends gapi.client.youtube.PlaylistItemsResource {
  list(request: {
    alt?: string;
    fields?: string;
    id?: string;
    key?: string;
    maxResults?: number;
    oauth_token?: string;
    onBehalfOfContentOwner?: string;
    pageToken?: string;
    part: string;
    playlistId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
    videoId?: string;
    mine?: boolean;
  }): Request<PlaylistItemListResponse>;
}

declare namespace gapi.client.youtube {
  const activities: youtube.ActivitiesResource;
  const captions: youtube.CaptionsResource;
  const channelBanners: youtube.ChannelBannersResource;
  const channelSections: youtube.ChannelSectionsResource;
  const channels: youtube.ChannelsResource;
  const commentThreads: youtube.CommentThreadsResource;
  const comments: youtube.CommentsResource;
  const fanFundingEvents: youtube.FanFundingEventsResource;
  const guideCategories: youtube.GuideCategoriesResource;
  const i18nLanguages: youtube.I18nLanguagesResource;
  const i18nRegions: youtube.I18nRegionsResource;
  const liveBroadcasts: youtube.LiveBroadcastsResource;
  const liveChatBans: youtube.LiveChatBansResource;
  const liveChatMessages: youtube.LiveChatMessagesResource;
  const liveChatModerators: youtube.LiveChatModeratorsResource;
  const liveStreams: youtube.LiveStreamsResource;
  const playlistItems: IPlaylistItemsResource;
  const playlists: youtube.PlaylistsResource;
  const search: youtube.SearchResource;
  const sponsors: youtube.SponsorsResource;
  const subscriptions: youtube.SubscriptionsResource;
  const superChatEvents: youtube.SuperChatEventsResource;
  const thumbnails: youtube.ThumbnailsResource;
  const videoAbuseReportReasons: youtube.VideoAbuseReportReasonsResource;
  const videoCategories: youtube.VideoCategoriesResource;
  const videos: youtube.VideosResource;
  const watermarks: youtube.WatermarksResource;
}
