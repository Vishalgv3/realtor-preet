"use client";

import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';

import { socialLinks } from '../data/socialLinks';

export function DialogBox(props) {

    // ---------------- props
    const { linkClicked, setLinkClicked, link } = props;

    // ---------------- state variables
    const [data, setData] = useState(null);

    // ---------------- useEffect
    useEffect(() => {
        if (link === "Instagram") {
            setData(socialLinks.instagram);
        } else if (link === "Email") {
            setData(socialLinks.email);
        } else if (link === "Contact Number") {
            setData(socialLinks.mobile);
        }
    }, [link, setData]);

    // ---------------- event handlers
    function closeModal() {
        setLinkClicked(false);
    }

    return (
        <>
            <Dialog as="div" className="relative z-10" open={linkClicked} onClose={closeModal}>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <DialogPanel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <DialogTitle
                                as="h3"
                                className="text-xl text-center font-bold leading-6 text-black"
                            >
                                {link}
                            </DialogTitle>
                            <div className="mt-2 font-semibold text-sm eading-normal">
                                <div dangerouslySetInnerHTML={{ __html: data }} />
                            </div>

                            <div className="mt-4">
                                <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                                    onClick={closeModal}
                                >
                                    Close
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog >
        </>
    )
}
