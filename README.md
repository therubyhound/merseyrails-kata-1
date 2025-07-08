![katas](https://github.com/user-attachments/assets/146ca171-7fb9-4fe8-9fbb-76c5e2e4a407)

>  [!NOTE]
>  This kata will be discussed at the [MerseyRails](https://merseyrails.com) meetup on 5th August 2025.

# Hotwire a List-Detail Layout

<img width="1824" alt="Screenshot " src="https://github.com/user-attachments/assets/ea294835-cc4b-4ed9-af31-af4926f1e93f" />

> [!TIP]
> To get the most from this exercise please try the kata yourself before reviewing any other implementations.

This repository contains a minimal example of a list-detail layout, similar to those commonly found in email clients. The application is functional but currently has some user experience issues—most notably:

- When you scroll through the list and select an email, the detail view loads correctly, but your scroll position in the list is lost.

## Your Challenge
The goal of this kata is to improve the user experience using Hotwire techniques. Specifically, you should:

- **Preserve scroll position** in the list when selecting an email

Whilst preserving the current functionality:

- **Update the URL** to reflect the selected email
- **Support direct navigation** (i.e. loading the page for a specific email URL)
- **Highlight the selected email** in the list (both when clicking an item and when navigating directly to a URL)

You should also consider:

- **Avoid unnecessary data reloads** when switching between emails
- **Responsive design** - the layout should adapt gracefully to smaller screens, supporting a good experience in a Progressive Web App (PWA) or Hotwire Native context

This kata is a great opportunity to explore how Hotwire can be used to create fluid, SPA-like experiences in a traditional Rails application without relying heavily on JavaScript.
