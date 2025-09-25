import Image from 'next/image';

const steps = [
  'Select party size, date and preferred dining area.',
  'Confirm contact details and optional notes (highchairs, dog-friendly tables, accessibility).',
  'Receive instant confirmation plus email reminders 24 hours prior.',
];

const futureIntegrations = [
  'Real-time table allocations via FavouriteTable or SevenRooms.',
  'Pod availability calendar with deposits handled through the CRM.',
  'Linking bookings to Diners Card profiles for personalised welcomes.',
];

export default function BookPage() {
  return (
    <div className="mx-auto mt-10 mb-16 w-full max-w-3xl space-y-6 rounded-3xl border border-[#d8e1ea] bg-white/95 px-4 py-12 shadow-sm sm:mt-14 sm:mb-20 sm:px-6">
      <div className="relative h-48 overflow-hidden rounded-2xl">
        <Image
          src="https://assets.baronspubs.com/uploads/sites/2/2018/09/cricketers-interior-3-1600x900.jpg"
          alt="Restaurant interior ready for reservations"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <p className="absolute bottom-4 left-4 font-display text-sm uppercase tracking-[0.2em] text-white">Bookings</p>
      </div>
      <p className="font-display text-sm uppercase tracking-[0.2em] text-slate-500">Bookings · Coming Soon</p>
      <h1 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl">Table booking widget to follow</h1>
      <p className="text-sm text-slate-600">
        When we connect to FavouriteTable or SevenRooms this page will host the live widget and pass context (party size,
        preferred area). For now it simply clarifies the plan and keeps the navigation complete.
      </p>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-display text-xl font-semibold text-slate-900">Future booking flow</h2>
        <ol className="mt-3 space-y-2 text-sm text-slate-600">
          {steps.map((step, index) => (
            <li key={step}>
              <span className="font-semibold text-slate-900">{index + 1}.</span> {step}
            </li>
          ))}
        </ol>
      </div>
      <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50/80 p-6 text-sm text-slate-600">
        <h2 className="font-display text-xl font-semibold text-slate-900">Integration roadmap</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          {futureIntegrations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
