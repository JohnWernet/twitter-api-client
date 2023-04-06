(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.Explore"],
  {
    57765: (e) => {
      e.exports = {
        queryId: "RmazNpiKQo6XmyX_AZfjiw",
        operationName: "ImmersiveMedia",
        operationType: "query",
        metadata: {
          featureSwitches: [
            "blue_business_profile_image_shape_enabled",
            "responsive_web_graphql_exclude_directive_enabled",
            "verified_phone_label_enabled",
            "responsive_web_graphql_timeline_navigation_enabled",
            "responsive_web_graphql_skip_user_profile_image_extensions_enabled",
            "tweetypie_unmention_optimization_enabled",
            "vibe_api_enabled",
            "responsive_web_edit_tweet_api_enabled",
            "graphql_is_translatable_rweb_tweet_is_translatable_enabled",
            "view_counts_everywhere_api_enabled",
            "longform_notetweets_consumption_enabled",
            "tweet_awards_web_tipping_enabled",
            "freedom_of_speech_not_reach_fetch_enabled",
            "standardized_nudges_misinfo",
            "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled",
            "interactive_text_enabled",
            "responsive_web_text_conversations_enabled",
            "longform_notetweets_richtext_consumption_enabled",
            "responsive_web_enhance_cards_enabled",
          ],
        },
      };
    },
    93490: (e, i, _) => {
      "use strict";
      _.r(i),
        _.d(i, { default: () => d, isImmersiveMediaTimelineError: () => o });
      var n = _(72599),
        t = _(17360),
        a = _(83175),
        r = _(57765),
        s = _.n(r),
        l = _(82249);
      const o = (e, i) => {
          var _;
          const a =
            null == i || null == (_ = i.immersiveMedia) ? void 0 : _.timeline;
          return (
            a || (0, n.ZP)("GQL failed to query for Immersive Media timeline"),
            !a && (0, t.jB)(e)
          );
        },
        d = ({ apiClient: e, featureSwitches: i }) => ({
          fetchImmersiveMedia: (_) =>
            e
              .graphQL(
                s(),
                {
                  pinned_tweet_id: null == _ ? void 0 : _.pinned_tweet_id,
                  page_name: null == _ ? void 0 : _.page_name,
                  ...(0, a.d)(i),
                },
                o
              )
              .then((e) => {
                var i;
                return (
                  (null == e || null == (i = e.immersiveMedia)
                    ? void 0
                    : i.timeline) || l.cY
                );
              }),
        });
    },
    83175: (e, i, _) => {
      "use strict";
      _.d(i, { S: () => r, d: () => a });
      var n = _(60917),
        t = _.n(n);
      const a = (e) => {
          const i = e.isTrue("responsive_web_reactions_enabled");
          return {
            ...r(e),
            withDownvotePerspective: e.isTrue("rweb_reply_downvote_enabled"),
            withReactionsMetadata: i,
            withReactionsPerspective: i,
          };
        },
        r = (e) => t();
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.Explore.16f0494a.js.map
