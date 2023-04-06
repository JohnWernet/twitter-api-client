(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.TopArticles"],
  {
    72165: (e) => {
      e.exports = {
        queryId: "iufefJtsU9LXcX_H4dd0KA",
        operationName: "ArticleTimeline",
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
    9907: (e) => {
      e.exports = {
        queryId: "RTUAKGUkI0I-WtJ1prgmuA",
        operationName: "ArticleTweetsTimeline",
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
    15823: (e, i, t) => {
      "use strict";
      t.r(i),
        t.d(i, {
          default: () => w,
          isFatalArticleTimelineError: () => c,
          isFatalArticleTweetsTimelineError: () => b,
        });
      var _ = t(72599),
        n = t(27024),
        r = t(17360),
        l = t(83175),
        a = t(72165),
        s = t.n(a),
        o = t(9907),
        d = t.n(o),
        p = t(82249);
      const b = (e, i) => {
          var t, n;
          const l =
            null == i ||
            null == (t = i.article_by_rest_id) ||
            null == (n = t.tweets_timeline)
              ? void 0
              : n.timeline;
          return (
            l ||
              (0, _.ZP)(
                "GQL Top Articles: Failed query for article Tweets timeline"
              ),
            !l && (0, r.jB)(e)
          );
        },
        c = (e, i) => {
          var t;
          const n =
            null == i || null == (t = i.article_timeline) ? void 0 : t.timeline;
          return (
            n ||
              (0, _.ZP)("GQL Top Articles: Failed query for article timeline"),
            !n && (0, r.jB)(e)
          );
        },
        w = ({ apiClient: e, featureSwitches: i }) => ({
          fetchArticleTweetsTimeline(t) {
            const _ =
              t.articleListSeedType === n.v.FRIENDS_OF_FRIENDS
                ? "FriendsOfFriends"
                : "FollowingList";
            return e
              .graphQL(d(), { ...t, ...(0, l.d)(i), articleListSeedType: _ }, b)
              .then((e) => {
                var i, t;
                return (
                  (null == e ||
                  null == (i = e.article_by_rest_id) ||
                  null == (t = i.tweets_timeline)
                    ? void 0
                    : t.timeline) || p.cY
                );
              });
          },
          fetchArticleTimeline(t) {
            const _ =
              t.articleListSeedType === n.v.FRIENDS_OF_FRIENDS
                ? "FriendsOfFriends"
                : "FollowingList";
            return e
              .graphQL(s(), { ...t, ...(0, l.d)(i), articleListSeedType: _ }, c)
              .then((e) => {
                var i;
                return (
                  (null == e || null == (i = e.article_timeline)
                    ? void 0
                    : i.timeline) || p.cY
                );
              });
          },
        });
    },
    83175: (e, i, t) => {
      "use strict";
      t.d(i, { S: () => l, d: () => r });
      var _ = t(60917),
        n = t.n(_);
      const r = (e) => {
          const i = e.isTrue("responsive_web_reactions_enabled");
          return {
            ...l(e),
            withDownvotePerspective: e.isTrue("rweb_reply_downvote_enabled"),
            withReactionsMetadata: i,
            withReactionsPerspective: i,
          };
        },
        l = (e) => n();
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.TopArticles.b6e0f40a.js.map
